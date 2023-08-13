import classNames from 'classnames';

function Skeleton({ times }) {
  // const boxes = [];
  // for (let i = 0; i < times; i++) {
  //   boxes.push(<div key={i} />);
  // }
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return <div key={i} />;
    });
  return boxes;
}
export default Skeleton;
