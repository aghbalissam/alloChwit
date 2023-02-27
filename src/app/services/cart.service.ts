import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartElements : any[] = [];
  total : number = 0;
  // lastRest !: any;
  constructor() { }

  // Use the id to interact with specific [ res/cof ] 

  getAllProducts(idRest: number)
  { 
    let localCart = JSON.parse(localStorage.getItem('cart') as string)
    if(Array.isArray(localCart))
      this.cartElements = localCart;
    
    return this.findAll(idRest);
  }

  // Array model to stock in localStorage 
  
  example = [
    {
      idRes: 223,
      nameRes : 'fzejkfel',
      slugRes : 'lzefjzekl',
      products : 
      [
        {
          description : "",
          name : "Tacos Gratiné Buffalo",
          parentId : 56855,
          price : 20,
          quantity : 3,
          total : 60
        }
      ],
      total : 343,
      active : true
    },
    {
      idRes: 4334,
      nameRes : 'fzejkfel',
      slugRes : 'lzefjzekl',
      products : 
      [
        {
          description : "",
          name : "Tacos Gratiné Buffalo",
          parentId : 56855,
          price : 20,
          quantity : 3,
          total : 60
        }
      ],
      total : 343,
      active : false
    }
  ]


  addProduct(item: any)
  {
    let index = this.findRest(item.idRes)[1];
    if(index != -1)
    {
      this.cartElements[index].products.push(item);
      this.activeRes(index)
    }
    else
    {
      let obj = {
        idRes: item.idRes,
        nameRes : item.nameRes,
        slugRes : item.slugRes,
        products : <any>[],
      }
      obj.products.push(item);
      this.cartElements.push(obj);
      this.activeRes(this.cartElements.length-1)
    }
    // this.total += item.price;
  }

  removeProduct(item: any)
  {
    let index = this.findRest(item.idRes)[1];
    if(index != -1)
    {
      let indexProd = this.cartElements[index].products.findIndex((prod :any) => prod.id == item.id );
      this.cartElements[index].products.splice(indexProd, 1);
      this.updateStorage();
    }
  } 

  editProduct(product: any )
  {
    let resIndex, prodIndex;
    resIndex = this.findRest(product.idRes)[1];
    prodIndex = this.cartElements[resIndex].products.findIndex((prod: any) => prod.id  == product.id)
    if(resIndex != -1 && prodIndex != -1)
    {
      this.cartElements[resIndex].products[prodIndex] = product
      this.updateStorage();
    }
  }

  calculTotal(idRes: any)
  {
    let t : number = 0;
    let index = this.findRest(idRes)[1];
    
    this.cartElements[index].products.forEach((prod :any) => {
        t += prod.total;
    });
    return t;
  }

  findAll(id: number)
  {
    let parent = this.findRest(id)[0];
    return (parent)? parent.products : [];
  }

  getActiveItem()
  {
    this.cartElements = JSON.parse(localStorage.getItem('cart') as string);
    let par = this.cartElements.find(res => res.state == true);
    return par;  
  }

  /*  (activeRes, activeResCheckout)  */

  activeRes(index: any)
  {
    this.cartElements.forEach((res, i) => { (index == i) ? res.state = true: res.state = false; })
    this.updateStorage();
  }

  activeResCheckout(idRes: any)
  {
    this.cartElements.forEach((res, i) => { (res.idRes == idRes) ? res.state = true: res.state = false; })
    this.updateStorage();
  }

  /*************/

  updateStorage()
  {
    localStorage.setItem('cart', JSON.stringify(this.cartElements))
  }

  findRest(id: any): Array<any>
  {
    let ele = this.cartElements.find(res => res.idRes == id);
    let index = this.cartElements.findIndex(res => res.idRes == id);
    return [ele, index] 
  }
}
