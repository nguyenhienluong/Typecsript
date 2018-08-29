import * as $ from 'jquery';

import 'bootstrap';
import {NhanVien} from '../models/NhanVien';
import {QuanLy} from '../models/QuanLy';
import {GiamDoc} from '../models/GiamDoc';
import {DanhSachNhanVien} from '../models/DanhSachNhanVien';


function ThemNhanVien () {
    // (manhanvien,ho,ten,ngaysinh,sodienthoai,email,ngaylam,chucvu)
    let manv = (<HTMLInputElement> document.getElementById('msnv')).value;
    let ho = (<HTMLInputElement> document.getElementById('ho')).value;
    let ten = (<HTMLInputElement> document.getElementById('ten')).value;
    let luongcoban:any = (<HTMLInputElement> document.getElementById('luongcoban')).value;
    luongcoban = parseInt(luongcoban);
    let phucap: any = (<HTMLInputElement> document.getElementById('phucap')).value;
    phucap =   parseInt(phucap);
    let hoahong: any = (<HTMLInputElement> document.getElementById('hoahong')).value;
    hoahong = parseInt(hoahong);
//     let ngaylam =  (<HTMLInputElement> document.getElementById('')).value;

let loainv = kiemTraLoaiNhanVien();
    if(loainv === null) {
        alert("nhập vào dùm cái nè");
    } else {
        let nhanVienMoi: NhanVien;
        if(loainv == "nhanvien") {
            // (manhanvien:string,ho:string,ten:string,luongcoban:number,chucvu:string)
            nhanVienMoi = new NhanVien (manv,ho, ten, luongcoban, loainv);
        } else {
            if(loainv == "quanly") {
                nhanVienMoi = new QuanLy(manv,ho,ten,luongcoban,loainv,hoahong);
            } else {
                if(loainv == "giamdoc") {
                nhanVienMoi = new GiamDoc(manv, ho, ten, luongcoban, loainv, phucap);
                }
            }
        }
        
    }
}
function kiemTraLoaiNhanVien() {
    let mangLoaiNhanVien:NodeListOf<any> = document.getElementsByClassName('loainv');
    for(let i in mangLoaiNhanVien) {
        if(mangLoaiNhanVien[i].checked) {
            return mangLoaiNhanVien[i].value;
        }
    }
    return null;

}
