import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {Order} from "../../shared/iterfaces";
import {MaterialInstance, MaterialService} from "../../shared/classes/material.service";

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements  OnDestroy,AfterViewInit {
@Input() orders: Order[]
// @ts-ignore
  @ViewChild('modal') modalRef:ElementRef
  modal: MaterialInstance
selectedOrder:Order

  ngOnDestroy() {
  this.modal.destroy()
  }

  ngAfterViewInit() {
  this.modal = MaterialService.initModal(this.modalRef)
  }

  computePrice(order: Order): number{
    return order.list.reduce((total,item)=>{
      return total += item.quantity * item.cost
    },0)
  }
  selectOrder(order: Order) {
this.selectedOrder = order
    this.modal.open()
  }
  closeModal(){
this.modal.close()
  }
}
