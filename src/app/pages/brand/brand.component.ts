import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands : any = [
    { code: '001', name: 'ARIEL', name_jp: '', name_en: 'ARIEL' },
    { code: '002', name: '阿斯顿马丁', name_jp: '', name_en: 'ASTON MARTIN' },
    { code: '003', name: '奥迪', name_jp: '', name_en: 'AUDI' },
    { code: '004', name: '宾利', name_jp: '', name_en: 'BENTLEY' },
    { code: '005', name: '宝马', name_jp: '', name_en: 'BMW' },
    { code: '006', name: '布加迪', name_jp: '', name_en: 'BUGATTI' },
    { code: '007', name: '凯特汉姆', name_jp: '', name_en: 'CATERHAM' },
    { code: '008', name: '雪佛兰', name_jp: '', name_en: 'CHEVROLET' },
    { code: '009', name: '道奇', name_jp: '', name_en: 'DODGE' },
    { code: '010', name: '法拉利', name_jp: '', name_en: 'FERRARI' },
    { code: '011', name: '福特', name_jp: '', name_en: 'FORD' },
    { code: '012', name: '電動方程式', name_jp: '', name_en: 'FORMULA-E' },
    { code: '013', name: '轩尼诗', name_jp: '', name_en: 'HERRESSEY' },
    { code: '014', name: '霍顿', name_jp: '', name_en: 'HOLDEN' },
    { code: '015', name: '现代', name_jp: '', name_en: 'HYUNDAI' },
    { code: '017', name: '捷豹', name_jp: '', name_en: 'JAGUAR' },
    { code: '018', name: '科尼赛克', name_jp: '', name_en: 'KOENIGSEGG' },
    { code: '019', name: 'KTM', name_jp: '', name_en: 'KTM' },
    { code: '020', name: '兰博基尼', name_jp: '', name_en: 'LAMBORGHINI' },
    { code: '021', name: '雷克萨斯', name_jp: '', name_en: 'LEXUS' },
    { code: '022', name: '莲花', name_jp: '', name_en: 'LOTUS' },
    { code: '023', name: '玛莎拉蒂', name_jp: '', name_en: 'MASERATI' },
    { code: '024', name: '迈凯伦', name_jp: '', name_en: 'MCLAREN' },
    { code: '025', name: '梅赛德斯··奔驰', name_jp: '', name_en: 'MERCEDES-BENZ' },
    { code: '026', name: '日产', name_jp: '', name_en: 'NISSAN' },
    { code: '027', name: '帕加尼', name_jp: '', name_en: 'PAGANI' },
    { code: '028', name: '保时捷', name_jp: '', name_en: 'PORSCHE' },
    { code: '029', name: '雷诺', name_jp: '', name_en: 'RENAULT' },
    { code: '030', name: '福特野马', name_jp: '', name_en: 'SHELBY' },
    { code: '031', name: 'SPADA', name_jp: '', name_en: 'SPADA' },
    { code: '032', name: 'SRT', name_jp: '', name_en: 'SRT' },
    { code: '033', name: '丰田', name_jp: '', name_en: 'TOYOTA' },
    { code: '034', name: '', name_jp: '', name_en: '...' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
