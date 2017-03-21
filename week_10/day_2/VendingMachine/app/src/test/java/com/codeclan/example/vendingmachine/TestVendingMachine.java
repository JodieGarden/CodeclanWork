package com.codeclan.example.vendingmachine;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 14/03/2017.
 */

public class TestVendingMachine {

    VendingMachine vendingMachine;

    @Before
    public void before(){
        vendingMachine = new VendingMachine();
    }

    @Test
    public void testBalanceIsZero(){
        assertEquals(0, vendingMachine.getBalance());
    }

    @Test
    public void testCanAddDime(){
        vendingMachine.insertCoin(10);
        assertEquals(10, vendingMachine.getBalance());
    }

    @Test
    public void testAddMultipleCoins(){
        vendingMachine.insertCoin(10);
        vendingMachine.insertCoin(5);
        assertEquals(15, vendingMachine.getBalance());
    }

    @Test
    public void testVendingMachineHasStock(){
        assertEquals("Wotsits", vendingMachine.getStock());
    }

    @Test
    public void testCanAddSnacks(){
        vendingMachine.addSnack("Wotsits", 65);
        assertEquals(65, vendingMachine.getSnackValue("Wotsits"));
    }

    @Test
    public void testCanAffordSnack(){
        vendingMachine.addSnack("Wotsits", 65);
        vendingMachine.insertCoin(65);
        assertEquals(true, vendingMachine.canAffordSnack("Wotsits"));
    }

    @Test
    public void testCanReceiveItem(){
        vendingMachine.addSnack("Wotsits", 65);
        vendingMachine.insertCoin(65);
        assertEquals("Wotsits for you", vendingMachine.getSnack("Wotsits"));
    }

}
