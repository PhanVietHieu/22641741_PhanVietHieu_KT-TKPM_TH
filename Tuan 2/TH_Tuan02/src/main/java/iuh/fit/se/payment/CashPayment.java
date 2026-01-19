package iuh.fit.se.payment;

import org.springframework.stereotype.Component;

@Component("cash")
public class CashPayment implements Payment {
    @Override
    public String pay(double amount) {
        return "Thanh toán tiền mặt: " + amount;
    }
}
