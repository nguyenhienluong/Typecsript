import {NhanVien} from './NhanVien';

export class DanhSachNhanVien {
    public mangnhanvien: Array<NhanVien> = [];
    public themNhanVien(nv) {
        this.mangnhanvien.push(nv);
    }
}