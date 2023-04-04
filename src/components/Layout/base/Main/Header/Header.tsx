import { Logo3D } from "@subwallet-webapp/components/Logo"
import MetaInfo from "@subwallet-webapp/components/MetaInfo"
import { ThemeProps } from "@subwallet-webapp/types/index"
import {
  Button,
  Icon,
  Layout,
  Menu,
  MenuProps,
  Typography,
} from "@subwallet/react-ui"
import CN from "classnames"
import { FadersHorizontal } from "phosphor-react"
import { useTranslation } from "react-i18next"

export type Props = ThemeProps

const mock = [
  {
    address: "string",
    name: "string",
  },
  {
    address: "string",
    name: "string",
  },
  {
    address: "string",
    name: "string",
  },
  {
    address: "string",
    name: "string",
  },
]

function Component({ className }: Props): React.ReactElement<Props> {
  return (
    <div className={CN(className)}>
      <Typography.Title className="page-name">Porfolio</Typography.Title>
      <div className="action-group">
        <Button
          icon={<Icon phosphorIcon={FadersHorizontal} size={"sm"} />}
          size={"xs"}
          type={"ghost"}
        />
        <MetaInfo.AccountGroup
          className="ava-group"
          accounts={mock}
          content={`${mock.length} networks`}
          // label={t(data.type === StakingType.POOLED ? "Pool" : "Validators")}
        />
        <MetaInfo.AccountGroup
          className="ava-group"
          accounts={mock}
          content={`${mock.length} networks`}
          // label={t(data.type === StakingType.POOLED ? "Pool" : "Validators")}
        />
      </div>
    </div>
  )
}

export default Component
