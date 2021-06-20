interface MyClass {
	Animate(doYield: boolean): string;
	RichTextObject(finishAnimation: boolean): string;
	Hide(): string;
	ContentSize: number;
	Overflown: boolean;
}
interface MyClassConstructor {
	New (
		GuiObject: Frame,
		StringText: string,
		Dictionary: { Font: string },
		allowOverflow: boolean | undefined,
	): MyClass;
	ContinueOverflow(GuiObject: Frame, RichTextObject: object): string;
}
declare const MyClass: MyClassConstructor;
export = MyClass;
