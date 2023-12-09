import React from "react";

interface Props {
  params: { zain: string[] };
}

const page = ({ params: { zain } }: Props) => {
  const [title, description, price] = zain;

  return (
    <div className="justify-center flex items-center">
      <div className="card w-96 bg-white shadow-xl">
        <figure>
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex gap-x-4">
            <h3 className="card-title">Price</h3>
            <h3 className="card-title">${price}</h3>
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
