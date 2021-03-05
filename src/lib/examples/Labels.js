import Label from "../controls/containers/Label";

function Labels() {
  return <>
    <h2>Labels</h2>
    <h3>Default (Squared Corners)</h3>
    <Label type={Label.TYPE.DEFAULT}>default label</Label>
    <Label type={Label.TYPE.PRIMARY}>primary label</Label>
    <Label type={Label.TYPE.SECONDARY}>secondary label</Label>
    <Label type={Label.TYPE.SUCCESS}>success label</Label>
    <Label type={Label.TYPE.WARNING}>warning label</Label>
    <Label type={Label.TYPE.ERROR}>error label</Label>

    <h3>Rounded Corners</h3>
    <Label type={Label.TYPE.DEFAULT} rounded={true}>default label</Label>
    <Label type={Label.TYPE.PRIMARY} rounded={true}>primary label</Label>
    <Label type={Label.TYPE.SECONDARY} rounded={true}>secondary label</Label>
    <Label type={Label.TYPE.SUCCESS} rounded={true}>success label</Label>
    <Label type={Label.TYPE.WARNING} rounded={true}>warning label</Label>
    <Label type={Label.TYPE.ERROR} rounded={true}>error label</Label>
  </>;
}

export default Labels;
