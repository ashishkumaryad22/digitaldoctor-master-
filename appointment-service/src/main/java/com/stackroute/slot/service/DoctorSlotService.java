package com.stackroute.slot.service;

import com.stackroute.slot.exceptions.SlotAlredyExist;
import com.stackroute.slot.models.DoctorSlot;

import java.util.Optional;


public interface DoctorSlotService {


    DoctorSlot createSlot(DoctorSlot doctorSlot) throws SlotAlredyExist;

    Optional<DoctorSlot> getSlotDetails(String slotId);


    DoctorSlot updateStatus(String slotId,DoctorSlot doctorSlot);

    void deleteSlotById(String slotId);
}
