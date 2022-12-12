import { BigInt } from "@graphprotocol/graph-ts"
import {
  Registry,
  IncorporateFinish,
  IncorporateFinishUpdate,
  IncorporateRevert,
  IncorporateStart
} from "../generated/Registry/Registry"
import { ExampleEntity, Immobile } from "../generated/schema"

export function handleIncorporateFinish(event: IncorporateFinish): void {

}

export function handleIncorporateFinishUpdate(
  event: IncorporateFinishUpdate
): void {}

export function handleIncorporateRevert(event: IncorporateRevert): void {}

export function handleIncorporateStart(event: IncorporateStart): void {
  const incorporator = event.params.incorporator;
  const itemId = event.params.itemId;

  const immobile = new Immobile(itemId.toString());

  immobile.employee = incorporator;
  immobile.itemId = itemId;

  immobile.save()



}
