### target

Прикрепляет попап к элементу, который указан в свойстве `anchor`.

<!-- props:start -->
| Свойство                  | Тип                                        | По умолчанию                                                                                                                                                                     | Описание                                                  |
| ------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| anchor?                   | `RefObject<HTMLElement>`                   | —                                                                                                                                                                                | Элемент, относительно которого позиционируется попап      |
| directions?               | `Direction[]`                              | `['bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right', 'right-top', 'right-center', 'right-bottom', 'left-top', 'left-center', 'left-bottom']` | Направления раскрытия блока                               |
| mainOffset?               | `number`                                   | `0`                                                                                                                                                                              | Отступ попапа относительно основного направления          |
| motionless?               | `false \| true`                            | —                                                                                                                                                                                | Закрепляет положение попапа после открытия                |
| secondaryOffset?          | `number`                                   | `0`                                                                                                                                                                              | Отступ попапа относительно второстепенного направления    |
| tailOffset?               | `number`                                   | `0`                                                                                                                                                                              | Отступ хвостика от края попапа                            |
| target?                   | `"anchor"`                                 | —                                                                                                                                                                                | Позиционирование попапа относительно переданного элемента |
| viewportOffset?           | `number`                                   | `0`                                                                                                                                                                              | Отступ от края окна браузера                              |
| getPossibleDrawingParams? | `(drawingParams: DrawingParams[]) => void` | —                                                                                                                                                                                | Расчет параметров для отрисовки                           |
<!-- props:end -->