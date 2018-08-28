class GiamDoc extends NhanVien {
    public phucap: number;
    constructor (manhanvien,ho,ten,luongcoban,sodienthoai,email,ngaylam,chucvu,phucap) {
        super(manhanvien,ho,ten,luongcoban,sodienthoai,email,ngaylam,chucvu);
        this.phucap = phucap;
    }
    public tinhluong() {
        this.luongtong = (this.luongcoban * 2) + this.phucap;
    }
}