> This file contains all changes that have not been released yet.

### Enhancements

- [Home] Set description on bulk snapshot [#3925](https://github.com/vatesfr/xen-orchestra/issues/3925) (PR [#3933](https://github.com/vatesfr/xen-orchestra/pull/3933))
- Work-around the XenServer issue when `VBD#VDI` is an empty string instead of an opaque reference (PR [#3950](https://github.com/vatesfr/xen-orchestra/pull/3950))

### Bug fixes

- [Host] Show the host's memory usage instead of the sum of the VMs' memory usage (PR [#3924](https://github.com/vatesfr/xen-orchestra/pull/3924))
- [SAML] Make `AssertionConsumerServiceURL` matches the callback URL
- [Backup NG] Correctly delete broken VHD chains [#3875](https://github.com/vatesfr/xen-orchestra/issues/3875) (PR [#3939](https://github.com/vatesfr/xen-orchestra/pull/3939))
- [Remotes] Don't ignore `mount` options [#3935](https://github.com/vatesfr/xen-orchestra/issues/3935) (PR [#3931](https://github.com/vatesfr/xen-orchestra/pull/3931))
- [Home/VM] The creation date of the VM is now visible [#3932](https://github.com/vatesfr/xen-orchestra/issues/3932) (PR [#3947](https://github.com/vatesfr/xen-orchestra/pull/3947))
- [VM/disk] Display device name [#3902](https://github.com/vatesfr/xen-orchestra/issues/3902) (PR [#3946](https://github.com/vatesfr/xen-orchestra/pull/3946))

### Released packages

- xen-api v0.24.2
- @xen-orchestra/fs v0.6.1
- xo-server-auth-saml v0.5.3
- xo-server v5.35.0
- xo-web v5.35.0