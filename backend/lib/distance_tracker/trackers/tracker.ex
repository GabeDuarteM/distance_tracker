defmodule DistanceTracker.Trackers.Tracker do
  use Ecto.Schema
  import Ecto.Changeset
  alias DistanceTracker.Trackers.Tracker


  schema "trackers" do
    field :activity, :string
    field :completed_at, :utc_datetime
    field :distance, :integer
    field :uuid, Ecto.UUID

    timestamps()
  end

  @doc false
  def changeset(%Tracker{} = tracker, attrs) do
    tracker
    |> cast(attrs, [:uuid, :distance, :activity, :completed_at])
    |> validate_required([:uuid, :distance, :activity, :completed_at])
  end
end
