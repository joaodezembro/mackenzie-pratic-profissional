/* eslint-disable no-nested-ternary */
import { CSSPropertiesWithShorthand } from "@interfaces/CSSProperties";
import { css } from "styled-components";

type ApplyStylesToComponentProps = {
  styles: CSSPropertiesWithShorthand;
};

export const applyStyles = ({
  styles,
}: ApplyStylesToComponentProps) => css`
    margin: ${styles.margin || ''};
    margin-top: ${styles.marginTop || ''};
    margin-right: ${styles.marginRight || ''};
    margin-bottom: ${styles.marginBottom || ''};
    margin-left: ${styles.marginLeft || ''};
    padding: ${styles.padding || ''};
    padding-top: ${styles.paddingTop || ''};
    padding-right: ${styles.paddingRight || ''};
    padding-bottom: ${styles.paddingBottom || ''};
    padding-left: ${styles.paddingLeft || ''};
    width: ${styles.width || ''};
    max-width: ${styles.mw || ''};
    height: ${styles.height || ''};
    overflow: ${styles.overflow || ""};
    background-color: ${styles.backgroundColor || ''};
    color: ${styles.color || ''};
    font-size: ${styles.fontSize ? typeof styles.fontSize === "number" ? `${styles.fontSize}px` : styles.fontSize : ''};
    font-weight: ${styles.fontWeight ? String(styles.fontWeight) : ''};
    line-height: ${styles.lineHeight || ''};
    text-align: ${styles.textAlign || ''};
    text-decoration: ${styles.textDecoration || ''};
    display: ${styles.display || 'block'};
    flex-direction: ${styles.flexDirection || ''};
    align-items: ${styles.alignItems || ''};
    align-content: ${styles.alignContent || ''};
    justify-content: ${styles.justifyContent || ''};
    gap: ${styles.gap || ''};
    position: ${styles.position || ''};
    top: ${styles.top || ''};
    right: ${styles.right || ''};
    bottom: ${styles.bottom || ''};
    left: ${styles.left || ''};
    transform: ${styles.transform || ''};
    border-radius: ${styles.borderRadius || ''};
    border: ${styles.border || styles.b || ''};
    border-color: ${styles.borderColor || ''};
    box-shadow: ${styles.boxShadow || ''};
  `;