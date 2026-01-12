import React, { useEffect, useRef, useCallback, useMemo } from 'react';

interface ProfileCardProps {
    avatarUrl: string;
    className?: string;
    enableTilt?: boolean;
    enableMobileTilt?: boolean;
    mobileTiltSensitivity?: number;
    name?: string;
    title?: string;
    contactText?: string;
    onContactClick?: () => void;
    // Deprecated/Unused props removed for simplicity
}

const ANIMATION_CONFIG = {
    INITIAL_DURATION: 1200,
    INITIAL_X_OFFSET: 70, // Kept as logic value for calculation
    INITIAL_Y_OFFSET: 60,
    DEVICE_BETA_OFFSET: 20,
    ENTER_TRANSITION_MS: 180
} as const;

const clamp = (v: number, min = 0, max = 100): number => Math.min(Math.max(v, min), max);
const round = (v: number, precision = 3): number => parseFloat(v.toFixed(precision));

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
    avatarUrl = '',
    className = '',
    enableTilt = true,
    enableMobileTilt = false,
    mobileTiltSensitivity = 5,
    name = 'User Name',
    title = 'Title',
    contactText = 'Contact',
    onContactClick
}) => {
    const wrapRef = useRef<HTMLDivElement>(null);
    const shellRef = useRef<HTMLDivElement>(null);
    const enterTimerRef = useRef<number | null>(null);
    const leaveRafRef = useRef<number | null>(null);

    const tiltEngine = useMemo(() => {
        if (!enableTilt) return null;

        let rafId: number | null = null;
        let running = false;
        let lastTs = 0;
        let currentX = 0;
        let currentY = 0;
        let targetX = 0;
        let targetY = 0;

        const DEFAULT_TAU = 0.14;
        const INITIAL_TAU = 0.6;
        let initialUntil = 0;

        const setVarsFromXY = (x: number, y: number) => {
            const shell = shellRef.current;
            const wrap = wrapRef.current;
            if (!shell || !wrap) return;

            const width = shell.clientWidth || 1;
            const height = shell.clientHeight || 1;

            const percentX = clamp((100 / width) * x);
            const percentY = clamp((100 / height) * y);

            const centerX = percentX - 50;
            const centerY = percentY - 50;

            const rotateX = round(-(centerX / 5)); // deg
            const rotateY = round(centerY / 4);   // deg

            // We apply transforms directly via style for performance during animation
            shell.style.setProperty('--rotate-x', `${rotateX}deg`);
            shell.style.setProperty('--rotate-y', `${rotateY}deg`);
        };

        const step = (ts: number) => {
            if (!running) return;
            if (lastTs === 0) lastTs = ts;
            const dt = (ts - lastTs) / 1000;
            lastTs = ts;

            const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
            const k = 1 - Math.exp(-dt / tau);

            currentX += (targetX - currentX) * k;
            currentY += (targetY - currentY) * k;

            setVarsFromXY(currentX, currentY);

            const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;

            if (stillFar || document.hasFocus()) {
                rafId = requestAnimationFrame(step);
            } else {
                running = false;
                lastTs = 0;
                if (rafId) {
                    cancelAnimationFrame(rafId);
                    rafId = null;
                }
            }
        };

        const start = () => {
            if (running) return;
            running = true;
            lastTs = 0;
            rafId = requestAnimationFrame(step);
        };

        return {
            setImmediate(x: number, y: number) {
                currentX = x;
                currentY = y;
                setVarsFromXY(currentX, currentY);
            },
            setTarget(x: number, y: number) {
                targetX = x;
                targetY = y;
                start();
            },
            toCenter() {
                const shell = shellRef.current;
                if (!shell) return;
                this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
            },
            beginInitial(durationMs: number) {
                initialUntil = performance.now() + durationMs;
                start();
            },
            getCurrent() {
                return { x: currentX, y: currentY, tx: targetX, ty: targetY };
            },
            cancel() {
                if (rafId) cancelAnimationFrame(rafId);
                rafId = null;
                running = false;
                lastTs = 0;
            }
        };
    }, [enableTilt]);

    const getOffsets = (evt: PointerEvent, el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
    };

    const handlePointerMove = useCallback(
        (event: PointerEvent) => {
            const shell = shellRef.current;
            if (!shell || !tiltEngine) return;
            const { x, y } = getOffsets(event, shell);
            tiltEngine.setTarget(x, y);
        },
        [tiltEngine]
    );

    const handlePointerEnter = useCallback(
        (event: PointerEvent) => {
            const shell = shellRef.current;
            if (!shell || !tiltEngine) return;

            // Add entering class for smooth transition reset if needed
            shell.style.transition = 'transform 0.5s ease-out';
            if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
            enterTimerRef.current = window.setTimeout(() => {
                shell.style.transition = 'transform 0.1s ease-out';
            }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);

            const { x, y } = getOffsets(event, shell);
            tiltEngine.setTarget(x, y);
        },
        [tiltEngine]
    );

    const handlePointerLeave = useCallback(() => {
        const shell = shellRef.current;
        if (!shell || !tiltEngine) return;

        tiltEngine.toCenter();

        const checkSettle = () => {
            const { x, y, tx, ty } = tiltEngine.getCurrent();
            const settled = Math.hypot(tx - x, ty - y) < 0.6;
            if (settled) {
                leaveRafRef.current = null;
            } else {
                leaveRafRef.current = requestAnimationFrame(checkSettle);
            }
        };
        if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
        leaveRafRef.current = requestAnimationFrame(checkSettle);
    }, [tiltEngine]);

    const handleDeviceOrientation = useCallback(
        (event: DeviceOrientationEvent) => {
            const shell = shellRef.current;
            if (!shell || !tiltEngine) return;
            const { beta, gamma } = event;
            if (beta == null || gamma == null) return;
            const centerX = shell.clientWidth / 2;
            const centerY = shell.clientHeight / 2;
            const x = clamp(centerX + gamma * mobileTiltSensitivity, 0, shell.clientWidth);
            const y = clamp(
                centerY + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
                0,
                shell.clientHeight
            );
            tiltEngine.setTarget(x, y);
        },
        [tiltEngine, mobileTiltSensitivity]
    );

    useEffect(() => {
        if (!enableTilt || !tiltEngine) return;
        const shell = shellRef.current;
        if (!shell) return;
        const pointerMoveHandler = handlePointerMove as EventListener;
        const pointerEnterHandler = handlePointerEnter as EventListener;
        const pointerLeaveHandler = handlePointerLeave as EventListener;
        const deviceOrientationHandler = handleDeviceOrientation as EventListener;

        shell.addEventListener('pointerenter', pointerEnterHandler);
        shell.addEventListener('pointermove', pointerMoveHandler);
        shell.addEventListener('pointerleave', pointerLeaveHandler);

        const handleClick = () => {
            if (!enableMobileTilt || location.protocol !== 'https:') return;
            const anyMotion = window.DeviceMotionEvent as any;
            if (anyMotion && typeof anyMotion.requestPermission === 'function') {
                anyMotion.requestPermission().then((state: string) => {
                    if (state === 'granted') window.addEventListener('deviceorientation', deviceOrientationHandler);
                }).catch(console.error);
            } else {
                window.addEventListener('deviceorientation', deviceOrientationHandler);
            }
        };
        shell.addEventListener('click', handleClick);

        const initialX = (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
        const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
        tiltEngine.setImmediate(initialX, initialY);
        tiltEngine.toCenter();
        tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);

        return () => {
            shell.removeEventListener('pointerenter', pointerEnterHandler);
            shell.removeEventListener('pointermove', pointerMoveHandler);
            shell.removeEventListener('pointerleave', pointerLeaveHandler);
            shell.removeEventListener('click', handleClick);
            window.removeEventListener('deviceorientation', deviceOrientationHandler);
            if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
            if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
            tiltEngine.cancel();
        };
    }, [enableTilt, enableMobileTilt, tiltEngine, handlePointerMove, handlePointerEnter, handlePointerLeave, handleDeviceOrientation]);

    const handleContactClick = useCallback(() => {
        onContactClick?.();
    }, [onContactClick]);

    return (
        <div
            ref={wrapRef}
            className={`relative w-full h-full flex justify-center items-center perspective-1000 ${className}`}
        >
            <div
                ref={shellRef}
                className="relative w-full max-w-sm h-auto transition-transform duration-100 ease-out preserve-3d"
                style={{ transform: 'rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))' }}
            >
                <section className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden preserve-3d">
                    <div className="flex flex-col items-center justify-start p-8 gap-6 preserve-3d">

                        {/* Name and Title */}
                        <div className="text-center translate-z-12">
                            <h3 className="m-0 text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                                {name}
                            </h3>
                            <p className="mt-2 text-lg font-medium text-gray-500">
                                {title}
                            </p>
                        </div>

                        {/* Avatar */}
                        <div className="relative flex justify-center items-center translate-z-8 transition-transform duration-300 hover:scale-105">
                            <img
                                className="w-56 h-56 rounded-full object-cover border-4 border-white shadow-2xl bg-gray-100"
                                src={avatarUrl}
                                alt={`${name || 'User'} avatar`}
                                loading="lazy"
                            />
                        </div>

                        {/* Contact Button */}
                        {onContactClick && (
                            <button
                                className="translate-z-10 bg-blue-900 text-white border-0 py-3 px-8 rounded-full font-semibold text-sm cursor-pointer transition-all duration-200 shadow-md hover:-translate-y-1 hover:shadow-lg hover:bg-black"
                                onClick={handleContactClick}
                                type="button"
                            >
                                {contactText}
                            </button>
                        )}

                    </div>
                </section>
            </div>
        </div>
    );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
