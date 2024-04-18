function init(hero) {
    hero.setname("Inferno");
    hero.setTeir(9)

    hero.setChestplate("item.superhero_armor.piece.vibranium_core")


    hero.addPowers("ben:pyronite_physiology", "sabri:vibranium_nanites");
    hero.addAttribute("PUNCH_DAMAGE", 8, 0);
    hero.addAttribute("WEAPON_DAMAGE", 5, 0);
    hero.addAttribute("JUMP_HEIGHT", 10, 0);
    hero.addAttribute("FALL_RESISTANCE", 7.5, 0);
    hero.addAttribute("SPRINT_SPEED", 2.5, 0);

    hero.addKeyBind("SUPER_SPEED", "Super Speed", 1)
    hero.addKeyBind("BLADE", "key.blade", 2);
    hero.addKeyBind("SHIELD", "key.shield", 2);
    hero.addKeyBind("AIM", "key.shoot", 3);
    
    hero.addKeyBind("NANOTECH_TRANSFORMATION", "Nanite Activation", 5)

    hero.setHasProperty(hasProperty);
    hero.supplyFunction("canAim", canAim);
    hero.setDamageProfile(getDamageProfile);
    hero.addDamageProfile("FLAME_PUNCH", {
        "types": {
            "BLUNT": 1.0,
            "FIRE": 0.4
        },
        "properties": {
            "HEAT_TRANSFER": 40,
            "IGNITE": 2
        }
    });

    switch (keyBind) {
        case "TRANSFORM":
            return entity.getData("fiskheroes:mask_open_timer") == 0;
        case "SHIELD":
            return entity.getData("fiskheroes:blade_timer") == 0 || entity.isBookPlayer();
        case "BLADE":
    }
}

function canAim(entity) {
    return entity.getHeldItem().isEmpty() && !entity.getData("fiskheroes:jetpacking");
}
