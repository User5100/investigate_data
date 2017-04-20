export class Field {
  constructor(public summary: string,
              public url: string,
              public title: string) { }
}

export class Hit {
  constructor(public fields: Field) { }
}
