import { useState } from "react";
import "../../assets/css/sidebar.css";
import Module from "./Module";

function SidebBar({ changeCurrentSubModule }) {
  const modulesInitValues = [
    {
      name: "Inventory",
      icon: "inventory",
      link: "/dashboard/inventory",
      submodules: [
        {
          name: "Product Management",
          icon: "product",
          link: "/dashboard/inventory/product-management",
          active: true,
        },
        {
          name: "Product Customization",
          icon: "product-customization",
          link: "/dashboard/inventory/product-customization",
          active: false,
        },
        {
          name: "Inventory Statistics",
          icon: "inventory-statistics",
          link: "/dashboard/inventory/inventory-statistics",
          active: false,
        },
        {
          name: "Inventory Scanning",
          icon: "inventory-scanning",
          link: "/dashboard/inventory/inventory-scanning",
          active: false,
        },
      ],
    },
    {
      name: "Delivery",
      icon: "delivery",
      link: "/dashboard/delivery",
      submodules: [
        {
          name: "Delivery Assingment",
          icon: "delivery-assignment",
          link: "/dashboard/delivery/delivery-assignment",
          active: false,
        },
        {
          name: "Consignment",
          icon: "consignment",
          link: "/dashboard/delivery/consginment",
          active: false,
        },
        {
          name: "Delivery Reports",
          icon: "delivery-reports",
          link: "/dashboard/delivery/delivery-reports",
          active: false,
        },
      ],
    },
  ];

  const [modules, setModules] = useState(modulesInitValues);

  const changeModuleData = (module, index, submodule) => {
    let modulesCopy = [...modules];
    modulesCopy.forEach((module, loopIndex) => {
      if (index != loopIndex) {
        module.submodules.forEach((submodule) => {
          submodule.active = false;
        });
      }
    });
    modulesCopy[index] = module;
    setModules(modulesCopy);
    changeCurrentSubModule(submodule);
  };

  return (
    <div className="side-bar-container flex h-screen flex-col">
      {/* <div className="side-bar-content flex flex-grow flex-row">
        <h1>SideBar</h1>
        <h1>Test</h1>
        <div>Test123</div>
      </div> */}

      <div className="side-bar-content flex flex-col">
        {modules.map((module, index) => {
          return (
            <Module
              module={module}
              index={index}
              key={"module_" + index}
              changeModuleData={changeModuleData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SidebBar;
