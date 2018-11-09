# Alert
### Usage

```jsx
import { Alert } from 'radiance-ui';

<Alert.Container>
  <Alert
    text="Your photos were uploaded successfully!"
    type="success"
    duration={4}
    onExit={() => {}}
  />
  <Alert
    text="Your photos were uploaded successfully!"
    type="success"
    duration="sticky"
    onExit={() => {}}
  />
  <Alert
    text="Support has been notified."
    type="info"
    duration="sticky"
    onExit={() => {}}
  />
  <Alert
    text="Oops! We couldn't update your information!"
    type="danger"
    duration="sticky"
    onExit={() => {}}
  />
</Alert.Container>
```

<!-- STORY -->

### Proptypes
| prop     | propType           | required | default | description                                                                                                                  |
|----------|--------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| text     | string             | yes      | -       | alert text to be displayed                                                                                                   |
| type     | string             | yes      | -       | must be one of: 'success', 'danger', 'info'                                                                                  |
| duration | number&#124;string | yes      | -       | can be 'sticky' or number in seconds before the alert is dismissed                                                           |
| onExit   | func               | yes      | -       | callback function called on dismissal of  the alert. The function will receive all  of the component's props as the argument |

### Notes
The `<Alert />` component provides only the styling for and enter/exit
behavior for alerts. Management of what alerts are showing on the screen
must be handled from outside of this component.

All alerts are dimissable by clicking on them. However, you can use the
`duration` prop to determine if the alert is sticky or dismissed on a
timer (in units of seconds).

The `onExit` handler will always receive the `<Alert />` component's
props as its argument.