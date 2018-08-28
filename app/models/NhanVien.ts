class NhanVien{
    public ho: String;
    public ten: String;
    public luongcoban : number;
    //public phucap: Number;
    //public hoahong: number;
    public manhanvien: string;
    //public ngaylam:string;
    public chucvu: string;
    public luongtong: number;
    constructor(manhanvien:string,ho:string,ten:string,luongcoban:number,chucvu:string) {
        this.manhanvien = manhanvien;
        this.ho = ho;
        this.ten = ten;
        this.luongcoban = luongcoban;
        //this.phucap = phucap;
        //this.hoahong = hoahong;
        //this.ngaylam = ngaylam;
        this.chucvu = chucvu;
    }
    public tinhluong() {
        this.luongtong = this.luongcoban;
    }

}