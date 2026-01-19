package iuh.fit.se.payment;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pay")
public class PaymentController {

    private final PaymentFactory factory;
    private final PaymentConfig config;

    public PaymentController(PaymentFactory factory, PaymentConfig config) {
        this.factory = factory;
        this.config = config;
    }

    @GetMapping
    public String pay(@RequestParam String type,
                      @RequestParam double amount) {

        Payment payment = factory.getPayment(type);
        return payment.pay(amount) + " (" + config.getCurrency() + ")";
    }
}

