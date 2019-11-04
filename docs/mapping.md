# Models

## Unit

#### Relationships
- [ ] belongs_to: property
- [ ] belongs_to :portfolio
- [ ] belongs_to :external_contract
- [ ] has_many :bathrooms, -> { order(:created_at) }, dependent: :destroy
- [ ] has_many :bedrooms, -> { order(:created_at) }, dependent: :destroy
- [ ] has_many :unit_images, -> { order(:order) }, dependent: :destroy
- [ ] has_many :unit_listings, dependent: :destroy
- [ ] has_many :bookings, through: :unit_listings
- [ ] has_many :work_orders
- [ ] has_many :work_reports, through: :work_orders
- [ ] has_many :invoices, through: :work_reports
- [ ] has_many :payouts
- [ ] has_many :contractor_payouts, through: :work_reports, source: :payout
- [ ] has_many :owner_payouts, through: :bookings, source: :payouts
- [ ] has_many :brands, through: :unit_listings
- [ ] has_many :reviews, dependent: :destroy
- [ ] has_many :quotes, dependent: :destroy
- [ ] has_many :opportunities
- [ ] has_many :failed_airbnb_updates, dependent: :destroy
- [ ] has_many :homeaway_subscriptions
- [ ] has_one :unit_availability, dependent: :destroy
- [ ] has_one :organization, through: :property
- [ ] has_one :csv_import, as: :importable
- [ ] has_one :point_central_mapping, as: :mappable, dependent: :destroy
- [ ] has_one :unit_pricing, dependent: :destroy
- [ ] has_many :employees, through: :employee_units
- [ ] has_many :channel_mappings, as: :mappable
- [ ] has_many :unit_channels
- [ ] has_many :workflow_units, dependent: :destroy
- [ ] has_many :workflows, through: :workflow_units



