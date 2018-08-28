class NhanVien{
    public ho: String;
    public ten: String;
    public luongcoban : number;
    public sodienthoai: Number;
    public email: string;
    public manhanvien: string;
    public ngaylam:string;
    public chucvu: string;
    public luongtong: number;
    constructor(manhanvien:string,ho:string,ten:string,luongcoban:number,sodienthoai:number,email:string,ngaylam:string,chucvu:string) {
        this.manhanvien = manhanvien;
        this.ho = ho;
        this.ten = ten;
        this.luongcoban = luongcoban;
        this.sodienthoai = sodienthoai;
        this.email = email;
        this.ngaylam = ngaylam;
        this.chucvu = chucvu;
    }
    public tinhluong() {
        this.luongtong = this.luongcoban;
    }

}