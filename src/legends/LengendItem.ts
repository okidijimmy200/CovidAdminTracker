class LegendItem {
    title: string;
    color: string;
    isFor: string;
    textColor: string
    public constructor(title: string, color: string, isFor: string, textColor: string) {
        this.title = title;
        this.color = color;
        this.isFor = isFor;
        this.textColor = textColor != null ? textColor : textColor;
    }
}

export default LegendItem