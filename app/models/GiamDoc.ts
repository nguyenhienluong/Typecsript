class GiamDoc extends NhanVien {
    public phucap: number;
    //(manhanvien:string,ho:string,ten:string,luongcoban:number,chucvu:string)
    constructor (manhanvien,ho,ten,luongcoban,chucvu,phucap) {
        super(manhanvien,ho,ten,luongcoban,chucvu);
        this.phucap = phucap;
    }
    public tinhluong() {
        this.luongtong = (this.luongcoban * 2) + this.phucap;
    }
}