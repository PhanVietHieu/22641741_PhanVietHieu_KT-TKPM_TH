package iuh.fit.se.payment;

import org.springframework.stereotype.Component;

@Component("bank")
public class BankPayment implements Payment {
    @Override
    public String pay(double amount) {
        return "Thanh toán chuyển khoản: " + amount;
    }
}

