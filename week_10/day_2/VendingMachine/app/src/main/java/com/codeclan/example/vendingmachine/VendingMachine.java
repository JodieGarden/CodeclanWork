package com.codeclan.example.vendingmachine;

import java.util.HashMap;

public class VendingMachine {

    int balance;
    HashMap<String, Integer> snacks;

    public VendingMachine(){
    this.balance = 0;
        this.snacks = new HashMap<String, Integer>();
    }

    public int getBalance(){
        return this.balance;
    }

    public void insertCoin(int val){
        this.balance += val;
    }

    public String getStock(){
        return "Wotsits";
    }

    public void addSnack(String snack, Integer value){
        snacks.put(snack, value);
    }

    public int getSnackValue(String snack) {
        return snacks.get(snack);

    }

    public boolean canAffordSnack(String snack) {
        if (this.balance == getSnackValue(snack)){
            return true;
        }
        return false;
    }


    public String getSnack(String snack) {
       if( this.canAffordSnack(snack) == true){
           return snack + " for you";
       }
        return "No " + snacks + " for you";

    }
}
