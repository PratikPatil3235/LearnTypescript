export abstract class ObjectShape{
    protected width: number|number;
    protected side?: null | number;
    protected radius?: null | number;

    constructor(width: number, side?: number | null, radius?: number | null) {
    this.width = width;
    this.side = side ?? null;
    this.radius = radius ?? null;
    }

    public abstract getArea():number;

    public abstract getPerimeter(): number;
}