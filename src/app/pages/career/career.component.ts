import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  careers: any = [
    { code: '01', name: '业余(AMATEUR)', name_jp: '', name_en: '', image: './assets/career/Amateur.png' },
    { code: '02', name: '纳斯卡(NASCAR)', name_jp: '', name_en: '' },
    { code: '03', name: '职业(PRO)/业余(AM)', name_jp: '', name_en: '' },
    { code: '04', name: '职业(PRO)', name_jp: '', name_en: '' },
    { code: '05', name: '专家(EXPERT)', name_jp: '', name_en: '' },
    { code: '06', name: '大师(MASTER)', name_jp: '', name_en: '' },
    { code: '07', name: '精英(ELITE)', name_jp: '', name_en: '' },
    { code: '08', name: '传奇(LEGEND)', name_jp: '', name_en: '' },
    { code: '09', name: '专属(EXCLUSIVE)', name_jp: '', name_en: '' },
    { code: '10', name: '...', name_jp: '', name_en: '' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
