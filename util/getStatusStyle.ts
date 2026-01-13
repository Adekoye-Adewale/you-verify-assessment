export function getStatusStyle(status: string): string {
        switch (status.toLowerCase()) {
                case "paid":
                        return "text-[#129043] border-[#12904333] bg-[#E6FFF0]";
                case "overdue":
                        return "text-[#FF5663] border-[#FF566333] bg-[#FFF4F5]";
                case "draft":
                        return "text-[#373B47] border-[#373B4733] bg-[#F6F8FA]";
                default:
                        return "text-[#D98F00] border-[#D98F0033] bg-[#FFF8EB]";
        }
}