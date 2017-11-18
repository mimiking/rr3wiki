import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  careers: any = [
    { code: '01', name: '业余', name_jp: '', name_en: '', image: './assets/career/Amateur.png' },
    { code: '02', name: '纳斯卡', name_jp: '', name_en: '' },
    { code: '03', name: '职业/业余', name_jp: '', name_en: '' },
    { code: '04', name: '职业', name_jp: '', name_en: '' },
    { code: '05', name: '专家', name_jp: '', name_en: '' },
    { code: '06', name: '大师', name_jp: '', name_en: '' },
    { code: '07', name: '精英', name_jp: '', name_en: '' },
    { code: '08', name: '传奇', name_jp: '', name_en: '' },
    { code: '09', name: '专属', name_jp: '', name_en: '' },
    { code: '10', name: '...', name_jp: '', name_en: '' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
