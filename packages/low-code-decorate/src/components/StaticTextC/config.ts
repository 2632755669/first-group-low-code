import { ConfigKey } from "@/clazz/config"
import { ComponentInfo } from "@/clazz/style"
export const componentName = 'StaticText'
class StaticTextComponent extends ComponentInfo {
  static POSITION: ConfigKey[] = ["width", "height", "top", "left"]
  static FONTS: ConfigKey[] = ["fontSize","fontWeight", "color"]
  constructor() {
    super(componentName)
    this.style.buildStyle(StaticTextComponent.POSITION, StaticTextComponent.FONTS)
  }
}

export default StaticTextComponent