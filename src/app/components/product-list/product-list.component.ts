import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { datacontantI } from './pro-list';
import { CardsService } from '../../service/cards.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  dataI:datacontantI[]=[];  

  constructor(private cardservice:CardsService){
    this.cardservice.getData().subscribe((data) => {this.dataI=  data});

  }

  ngOnInit(): void {
    
  }

  addToCart(){

  }
}
