import React from "react";

/** Render num w/remove button.
 *
 * Props:
 * - value: # to show
 * - remove: parent fn to call
 */

function NumberItem({ value, remove }) {

  /** Delete num via parent fn */
  function handleRemove() {
    remove(props.value);
  }

  return (
    <li>
      {value}
      <button onClick={handleRemove}>
        X
      </button>
    </li>
  );
}
// end

export default NumberItem;
