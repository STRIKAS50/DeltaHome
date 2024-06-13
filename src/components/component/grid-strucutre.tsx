
import { CardContent, Card } from "@/components/ui/card"

export function GridStrucutre() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10 p-4 md:p-6">
      <div className="card">
        <div className="card-content">
          <p className="card-title">Production and Shop Floor Management
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <p className="card-title">Master Production Schedule
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <p className="card-title">Material Requirement Planning
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <p className="card-title">Production Order
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <p className="card-title">Stores & Inventory Management
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <p className="card-title">Supplier & Purchase Management
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <p className="card-title">Customer & Order Management
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <p className="card-title">Plant Maintenance
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <p className="card-title">Accounts & Finance Management
          </p>
        </div>
      </div>
    </div>
  )
}
