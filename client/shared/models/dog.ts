enum Disposition {
  Friendly = "FRIENDLY",
  Mean = "MEAN",
  Lazy = "LAZY",
  GoodBoy = "GOOD_BOY",
}

export class Dog {
  name: string;
  type: string;
  disposition: Disposition;
}

