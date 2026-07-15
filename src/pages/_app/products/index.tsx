import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1 className="container">OLÁ</h1>

      <p className="text-black">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
        doloremque cum quis atque molestias sapiente quas impedit laborum porro
        eius temporibus veritatis eveniet, fuga facilis ipsam. Repellendus
        corporis maiores inventore.
      </p>
      <p className="text-black">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
        doloremque cum quis atque molestias sapiente quas impedit laborum porro
        eius temporibus veritatis eveniet, fuga facilis ipsam. Repellendus
        corporis maiores inventore.
      </p>
      <p className="text-black">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
        doloremque cum quis atque molestias sapiente quas impedit laborum porro
        eius temporibus veritatis eveniet, fuga facilis ipsam. Repellendus
        corporis maiores inventore.
      </p>
      <p className="text-black">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
        doloremque cum quis atque molestias sapiente quas impedit laborum porro
        eius temporibus veritatis eveniet, fuga facilis ipsam. Repellendus
        corporis maiores inventore.
      </p>
      <p className="text-black">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
        doloremque cum quis atque molestias sapiente quas impedit laborum porro
        eius temporibus veritatis eveniet, fuga facilis ipsam. Repellendus
        corporis maiores inventore.
      </p>
    </div>
  );
}
