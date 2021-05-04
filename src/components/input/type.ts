export interface InputProps {
  placeholder? : string
  autoFocus? : boolean
  secureTextEntry? : boolean
  onChangeText? : (text:string) => void
  value: string,
  onFocus? : () => void,
  bottomColor? : string
}