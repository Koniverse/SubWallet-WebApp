// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Layout } from "@subwallet-webapp/components"
import { ThemeProps } from "@subwallet-webapp/types"
import CN from "classnames"

export type Props = ThemeProps

function Component({ className }: Props): React.ReactElement<Props> {
  return (
    <Layout.Main className={CN(className)}>
      <>porfolio</>
    </Layout.Main>
  )
}

export default Component
