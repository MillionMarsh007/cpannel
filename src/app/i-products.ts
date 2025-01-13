export interface iProducts {
    position: number;
    productname: string;
    description: string;
    Price: number;
    categoryId: number;
    ImageId: number;
    isDelete: boolean;
}

  export interface iCategory {
    category:string;
    categoryId:number;
  }
