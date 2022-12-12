import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  IncorporateFinish,
  IncorporateFinishUpdate,
  IncorporateRevert,
  IncorporateStart
} from "../generated/Registry/Registry"

export function createIncorporateFinishEvent(
  id: BigInt,
  tabeliao: Address
): IncorporateFinish {
  let incorporateFinishEvent = changetype<IncorporateFinish>(newMockEvent())

  incorporateFinishEvent.parameters = new Array()

  incorporateFinishEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  incorporateFinishEvent.parameters.push(
    new ethereum.EventParam("tabeliao", ethereum.Value.fromAddress(tabeliao))
  )

  return incorporateFinishEvent
}

export function createIncorporateFinishUpdateEvent(
  id: BigInt,
  previousId: BigInt,
  tabeliao: Address
): IncorporateFinishUpdate {
  let incorporateFinishUpdateEvent = changetype<IncorporateFinishUpdate>(
    newMockEvent()
  )

  incorporateFinishUpdateEvent.parameters = new Array()

  incorporateFinishUpdateEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  incorporateFinishUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "previousId",
      ethereum.Value.fromUnsignedBigInt(previousId)
    )
  )
  incorporateFinishUpdateEvent.parameters.push(
    new ethereum.EventParam("tabeliao", ethereum.Value.fromAddress(tabeliao))
  )

  return incorporateFinishUpdateEvent
}

export function createIncorporateRevertEvent(
  id: BigInt,
  tabeliao: Address
): IncorporateRevert {
  let incorporateRevertEvent = changetype<IncorporateRevert>(newMockEvent())

  incorporateRevertEvent.parameters = new Array()

  incorporateRevertEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  incorporateRevertEvent.parameters.push(
    new ethereum.EventParam("tabeliao", ethereum.Value.fromAddress(tabeliao))
  )

  return incorporateRevertEvent
}

export function createIncorporateStartEvent(
  id: BigInt,
  incorporator: Address
): IncorporateStart {
  let incorporateStartEvent = changetype<IncorporateStart>(newMockEvent())

  incorporateStartEvent.parameters = new Array()

  incorporateStartEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  incorporateStartEvent.parameters.push(
    new ethereum.EventParam(
      "incorporator",
      ethereum.Value.fromAddress(incorporator)
    )
  )

  return incorporateStartEvent
}
