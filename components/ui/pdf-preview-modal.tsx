"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ZoomIn, ZoomOut, X, Maximize2 } from "lucide-react" // Pastikan install lucide-react
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PdfPreviewModalProps {
    isOpen: boolean
    onClose: () => void
    pdfUrl: string
    title: string
}

export function PdfPreviewModal({ isOpen, onClose, pdfUrl, title }: PdfPreviewModalProps) {
    const [scale, setScale] = useState(1)

    // Fungsi Zoom sederhana
    const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 2.5)) // Max zoom 2.5x
    const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5)) // Min zoom 0.5x

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            {/* Changes:
        1. max-w-screen & h-screen: Full viewport
        2. p-0 & border-none: Hilangkan padding & border default shadcn
        3. bg-transparent: Supaya terlihat floating
        4. [&>button]:hidden: Hide tombol close default bawaan shadcn (kita bikin sendiri)
      */}
            <DialogContent className="max-w-[95vw] h-[90vh] p-0 border-none bg-transparent shadow-none flex flex-col items-center justify-center [&>button]:hidden focus:outline-none">

                {/* Hidden Title for Accessibility (Shadcn requires it, but we visually hide it or custom style it) */}
                <DialogTitle className="sr-only">{title}</DialogTitle>

                {/* CUSTOM TOOLBAR (Floating Pill) */}
                <div className="absolute top-4 z-50 flex items-center gap-2 px-4 py-2 bg-zinc-900/90 backdrop-blur-md rounded-full text-white shadow-2xl border border-zinc-700/50 transition-all hover:bg-zinc-900">
                    <span className="text-sm font-medium mr-2 max-w-[90%] truncate border-r border-gray-600 pr-4">
                        {title}
                    </span>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white hover:bg-red-500/20 hover:text-red-400 rounded-full transition-colors"
                        onClick={onClose}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                {/* PDF VIEWPORT */}
                <div className="w-full h-full rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm relative flex items-center justify-center border border-white/10">
                    {/* Wrapper untuk handling Zoom (Scale) */}
                    <iframe
                        src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full rounded-lg shadow-2xl bg-gray-900"
                        title={title}
                    />
                </div>

            </DialogContent>
        </Dialog>
    )
}