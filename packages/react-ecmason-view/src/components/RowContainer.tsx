/**
 * @license
 * MIT License
 *
 * Copyright (c) 2022 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2022
 */
import { useConditionalMemo } from '@lyonph/react-hooks';
import React, { ReactNode } from 'react';
import { useTheme, useCreateStyle, useIndentSize } from './ThemeProvider';

interface RowContainerProps {
  children: ReactNode;
}

export default function RowContainer({ children }: RowContainerProps): JSX.Element {
  const theme = useTheme();
  const createStyle = useCreateStyle();
  const indentSize = useIndentSize();

  const style = useConditionalMemo(() => createStyle({
    paddingTop: '3px',
    paddingBottom: '3px',
    paddingRight: '5px',
    paddingLeft: `calc(5px * ${indentSize})`,
    borderLeft: `1px solid ${theme.base01}`,
  }), {
    theme,
    indentSize,
  }, (prev, next) => (
    !Object.is(prev.theme, next.theme)
    || !Object.is(prev.indentSize, next.indentSize)
  ));

  return (
    <div className={style}>
      {children}
    </div>
  );
}
