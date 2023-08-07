import { ProductService } from "./../product.service";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Product } from "../product.model";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  products: Product[];

  constructor(private producService: ProductService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.producService.read().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
}
