"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
// Note: DialogHeader saya skip biar kita bisa custom layout full width tanpa padding bawaan

interface PdfPreviewModalProps {
    isOpen: boolean
    onClose: () => void
    pdfUrl: string
    title: string
}

export function PdfPreviewModal({ isOpen, onClose, pdfUrl, title }: PdfPreviewModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            {/* Changes:
                1. max-w-5xl & w-[90vw]: Biar lebar hampir full screen.
                2. h-[90vh]: Biar tinggi hampir full screen.
                3. p-0: Hapus border putih/padding bawaan Shadcn (Borderless).
                4. gap-0: Biar gak ada jarak antara header dan iframe.
            */}
            <DialogContent className="max-w-5xl w-[95vw] h-[95vh] flex flex-col p-0 gap-0 overflow-hidden sm:rounded-lg">

                {/* Custom Header biar Title di tengah */}
                <div className="h-14 flex items-center justify-center border-b bg-white px-4 relative shrink-0">
                    <DialogTitle className="text-center w-full truncate font-semibold">
                        {title}
                    </DialogTitle>
                    {/* Close button bawaan Shadcn biasanya muncul absolute di pojok kanan, 
                        jadi aman tidak perlu ditambah manual kecuali ketutup */}
                </div>

                {/* Container PDF */}
                <div className="flex-1 w-full bg-gray-200 relative">
                    <iframe
                        /* Change:
                           Menghapus '#toolbar=0' agar fitur native Zoom, Select Text, 
                           dan Print bawaan browser muncul.
                           Ditambah '#view=FitH' agar PDF otomatis pas secara horizontal.
                        */
                        src={`${pdfUrl}#view=FitH`}
                        className="w-full h-full block"
                        title={title}
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}