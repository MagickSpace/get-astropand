import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const iconButtonFn = /* @__PURE__ */ createRecipe('iconButton', {
  "variant": "solid",
  "size": "md"
}, [])

const iconButtonVariantMap = {
  "variant": [
    "solid",
    "outline",
    "ghost",
    "link",
    "subtle"
  ],
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl"
  ]
}

const iconButtonVariantKeys = Object.keys(iconButtonVariantMap)

export const iconButton = /* @__PURE__ */ Object.assign(memo(iconButtonFn), {
  __recipe__: true,
  __name__: 'iconButton',
  raw: (props) => props,
  variantKeys: iconButtonVariantKeys,
  variantMap: iconButtonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, iconButtonVariantKeys)
  },
})