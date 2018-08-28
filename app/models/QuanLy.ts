class QuanLy extends NhanVien {
    
    public hoahong: number;
    constructor (manhanvien,ho,ten,luongcoban,sodienthoai,email,ngaylam,chucvu,hoahong) {
        super(manhanvien,ho,ten,luongcoban,sodienthoai,email,ngaylam,chucvu);
        this.hoahong = hoahong;
    }
    public tinhluong() {
        this.luongtong =  (this.luongcoban * 1.5) + this.hoahong;
    }
}