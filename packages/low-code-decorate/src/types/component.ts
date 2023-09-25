export interface IStaticTextSettingsForm {
  title: string;
  properties: Array<{
    label: string;
    value: string;
    maxLength: number;
    placeholder: string;
  }>
}

export interface IComponentData {
  title: string;
  component: React.FC<any>;
  propertiesForm: IStaticTextSettingsForm;
}

export interface IComponentComposeData extends IComponentData {
  id: string;
  children?: IComponentComposeData[]
}