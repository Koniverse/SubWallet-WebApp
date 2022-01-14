// Copyright 2019-2022 @polkadot/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { MetadataDef } from '@polkadot/extension-inject/types';

export const westendMetadata = {
  chain: 'Westend',
  color: '#da68a7',
  genesisHash: '0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e',
  icon: 'polkadot',
  metaCalls: 'bWV0YQxgGFN5c3RlbQABKChmaWxsX2Jsb2NrBBhfcmF0aW8cUGVyYmlsbAQFAUEgZGlzcGF0Y2ggdGhhdCB3aWxsIGZpbGwgdGhlIGJsb2NrIHdlaWdodCB1cCB0byB0aGUgZ2l2ZW4gcmF0aW8uGHJlbWFyawQcX3JlbWFyaxRCeXRlcwRoTWFrZSBzb21lIG9uLWNoYWluIHJlbWFyay44c2V0X2hlYXBfcGFnZXMEFHBhZ2VzDHU2NAT4U2V0IHRoZSBudW1iZXIgb2YgcGFnZXMgaW4gdGhlIFdlYkFzc2VtYmx5IGVudmlyb25tZW50J3MgaGVhcC4gc2V0X2NvZGUEEGNvZGUUQnl0ZXMEZFNldCB0aGUgbmV3IHJ1bnRpbWUgY29kZS5cc2V0X2NvZGVfd2l0aG91dF9jaGVja3MEEGNvZGUUQnl0ZXMEGQFTZXQgdGhlIG5ldyBydW50aW1lIGNvZGUgd2l0aG91dCBkb2luZyBhbnkgY2hlY2tzIG9mIHRoZSBnaXZlbiBgY29kZWAuXHNldF9jaGFuZ2VzX3RyaWVfY29uZmlnBExjaGFuZ2VzX3RyaWVfY29uZmlngE9wdGlvbjxDaGFuZ2VzVHJpZUNvbmZpZ3VyYXRpb24+BJxTZXQgdGhlIG5ldyBjaGFuZ2VzIHRyaWUgY29uZmlndXJhdGlvbi4sc2V0X3N0b3JhZ2UEFGl0ZW1zNFZlYzxLZXlWYWx1ZT4EaFNldCBzb21lIGl0ZW1zIG9mIHN0b3JhZ2UuMGtpbGxfc3RvcmFnZQQQa2V5cyBWZWM8S2V5PgR0S2lsbCBzb21lIGl0ZW1zIGZyb20gc3RvcmFnZS4sa2lsbF9wcmVmaXgIGHByZWZpeAxLZXkgX3N1YmtleXMMdTMyBBEBS2lsbCBhbGwgc3RvcmFnZSBpdGVtcyB3aXRoIGEga2V5IHRoYXQgc3RhcnRzIHdpdGggdGhlIGdpdmVuIHByZWZpeC4cc3VpY2lkZQAIYQFLaWxsIHRoZSBzZW5kaW5nIGFjY291bnQsIGFzc3VtaW5nIHRoZXJlIGFyZSBubyByZWZlcmVuY2VzIG91dHN0YW5kaW5nIGFuZCB0aGUgY29tcG9zaXRljGRhdGEgaXMgZXF1YWwgdG8gaXRzIGRlZmF1bHQgdmFsdWUuAAAAAGBSYW5kb21uZXNzQ29sbGVjdGl2ZUZsaXAAAAAAABkQQmFiZQABCExyZXBvcnRfZXF1aXZvY2F0aW9uCEhlcXVpdm9jYXRpb25fcHJvb2ZUQmFiZUVxdWl2b2NhdGlvblByb29mPGtleV9vd25lcl9wcm9vZjRLZXlPd25lclByb29mEAkBUmVwb3J0IGF1dGhvcml0eSBlcXVpdm9jYXRpb24vbWlzYmVoYXZpb3IuIFRoaXMgbWV0aG9kIHdpbGwgdmVyaWZ5BQF0aGUgZXF1aXZvY2F0aW9uIHByb29mIGFuZCB2YWxpZGF0ZSB0aGUgZ2l2ZW4ga2V5IG93bmVyc2hpcCBwcm9vZg0BYWdhaW5zdCB0aGUgZXh0cmFjdGVkIG9mZmVuZGVyLiBJZiBib3RoIGFyZSB2YWxpZCwgdGhlIG9mZmVuY2Ugd2lsbDBiZSByZXBvcnRlZC5wcmVwb3J0X2VxdWl2b2NhdGlvbl91bnNpZ25lZAhIZXF1aXZvY2F0aW9uX3Byb29mVEJhYmVFcXVpdm9jYXRpb25Qcm9vZjxrZXlfb3duZXJfcHJvb2Y0S2V5T3duZXJQcm9vZiAJAVJlcG9ydCBhdXRob3JpdHkgZXF1aXZvY2F0aW9uL21pc2JlaGF2aW9yLiBUaGlzIG1ldGhvZCB3aWxsIHZlcmlmeQUBdGhlIGVxdWl2b2NhdGlvbiBwcm9vZiBhbmQgdmFsaWRhdGUgdGhlIGdpdmVuIGtleSBvd25lcnNoaXAgcHJvb2YNAWFnYWluc3QgdGhlIGV4dHJhY3RlZCBvZmZlbmRlci4gSWYgYm90aCBhcmUgdmFsaWQsIHRoZSBvZmZlbmNlIHdpbGwwYmUgcmVwb3J0ZWQuDQFUaGlzIGV4dHJpbnNpYyBtdXN0IGJlIGNhbGxlZCB1bnNpZ25lZCBhbmQgaXQgaXMgZXhwZWN0ZWQgdGhhdCBvbmx5FQFibG9jayBhdXRob3JzIHdpbGwgY2FsbCBpdCAodmFsaWRhdGVkIGluIGBWYWxpZGF0ZVVuc2lnbmVkYCksIGFzIHN1Y2gVAWlmIHRoZSBibG9jayBhdXRob3IgaXMgZGVmaW5lZCBpdCB3aWxsIGJlIGRlZmluZWQgYXMgdGhlIGVxdWl2b2NhdGlvbiRyZXBvcnRlci4AAAABJFRpbWVzdGFtcAABBAxzZXQEDG5vdzxDb21wYWN0PE1vbWVudD4EVFNldCB0aGUgY3VycmVudCB0aW1lLgAAAAIcSW5kaWNlcwABFBRjbGFpbQQUaW5kZXgwQWNjb3VudEluZGV4BJhBc3NpZ24gYW4gcHJldmlvdXNseSB1bmFzc2lnbmVkIGluZGV4LiB0cmFuc2ZlcggMbmV3JEFjY291bnRJZBRpbmRleDBBY2NvdW50SW5kZXgIXQFBc3NpZ24gYW4gaW5kZXggYWxyZWFkeSBvd25lZCBieSB0aGUgc2VuZGVyIHRvIGFub3RoZXIgYWNjb3VudC4gVGhlIGJhbGFuY2UgcmVzZXJ2YXRpb264aXMgZWZmZWN0aXZlbHkgdHJhbnNmZXJyZWQgdG8gdGhlIG5ldyBhY2NvdW50LhBmcmVlBBRpbmRleDBBY2NvdW50SW5kZXgElEZyZWUgdXAgYW4gaW5kZXggb3duZWQgYnkgdGhlIHNlbmRlci44Zm9yY2VfdHJhbnNmZXIMDG5ldyRBY2NvdW50SWQUaW5kZXgwQWNjb3VudEluZGV4GGZyZWV6ZRBib29sCFUBRm9yY2UgYW4gaW5kZXggdG8gYW4gYWNjb3VudC4gVGhpcyBkb2Vzbid0IHJlcXVpcmUgYSBkZXBvc2l0LiBJZiB0aGUgaW5kZXggaXMgYWxyZWFkeehoZWxkLCB0aGVuIGFueSBkZXBvc2l0IGlzIHJlaW1idXJzZWQgdG8gaXRzIGN1cnJlbnQgb3duZXIuGGZyZWV6ZQQUaW5kZXgwQWNjb3VudEluZGV4BGUBRnJlZXplIGFuIGluZGV4IHNvIGl0IHdpbGwgYWx3YXlzIHBvaW50IHRvIHRoZSBzZW5kZXIgYWNjb3VudC4gVGhpcyBjb25zdW1lcyB0aGUgZGVwb3NpdC4AAAADIEJhbGFuY2VzAAEQIHRyYW5zZmVyCBBkZXN0MExvb2t1cFNvdXJjZRR2YWx1ZUBDb21wYWN0PEJhbGFuY2U+BNRUcmFuc2ZlciBzb21lIGxpcXVpZCBmcmVlIGJhbGFuY2UgdG8gYW5vdGhlciBhY2NvdW50LixzZXRfYmFsYW5jZQwMd2hvMExvb2t1cFNvdXJjZSBuZXdfZnJlZUBDb21wYWN0PEJhbGFuY2U+MG5ld19yZXNlcnZlZEBDb21wYWN0PEJhbGFuY2U+BJBTZXQgdGhlIGJhbGFuY2VzIG9mIGEgZ2l2ZW4gYWNjb3VudC44Zm9yY2VfdHJhbnNmZXIMGHNvdXJjZTBMb29rdXBTb3VyY2UQZGVzdDBMb29rdXBTb3VyY2UUdmFsdWVAQ29tcGFjdDxCYWxhbmNlPhhNAUV4YWN0bHkgYXMgYHRyYW5zZmVyYCwgZXhjZXB0IHRoZSBvcmlnaW4gbXVzdCBiZSByb290IGFuZCB0aGUgc291cmNlIGFjY291bnQgbWF5IGJlKHNwZWNpZmllZC4oIyA8d2VpZ2h0Pj0BLSBTYW1lIGFzIHRyYW5zZmVyLCBidXQgYWRkaXRpb25hbCByZWFkIGFuZCB3cml0ZSBiZWNhdXNlIHRoZSBzb3VyY2UgYWNjb3VudCBpc4Rub3QgYXNzdW1lZCB0byBiZSBpbiB0aGUgb3ZlcmxheS4sIyA8L3dlaWdodD5MdHJhbnNmZXJfa2VlcF9hbGl2ZQgQZGVzdDBMb29rdXBTb3VyY2UUdmFsdWVAQ29tcGFjdDxCYWxhbmNlPghNAVNhbWUgYXMgdGhlIFtgdHJhbnNmZXJgXSBjYWxsLCBidXQgd2l0aCBhIGNoZWNrIHRoYXQgdGhlIHRyYW5zZmVyIHdpbGwgbm90IGtpbGwgdGhlPG9yaWdpbiBhY2NvdW50LgAAAARIVHJhbnNhY3Rpb25QYXltZW50AAAAAAAaKEF1dGhvcnNoaXAAAQQoc2V0X3VuY2xlcwQobmV3X3VuY2xlcyxWZWM8SGVhZGVyPgRgUHJvdmlkZSBhIHNldCBvZiB1bmNsZXMuAAAABRxTdGFraW5nAAFgEGJvbmQMKGNvbnRyb2xsZXIwTG9va3VwU291cmNlFHZhbHVlSENvbXBhY3Q8QmFsYW5jZU9mPhRwYXllZURSZXdhcmREZXN0aW5hdGlvbghhAVRha2UgdGhlIG9yaWdpbiBhY2NvdW50IGFzIGEgc3Rhc2ggYW5kIGxvY2sgdXAgYHZhbHVlYCBvZiBpdHMgYmFsYW5jZS4gYGNvbnRyb2xsZXJgIHdpbGyAYmUgdGhlIGFjY291bnQgdGhhdCBjb250cm9scyBpdC4oYm9uZF9leHRyYQQ4bWF4X2FkZGl0aW9uYWxIQ29tcGFjdDxCYWxhbmNlT2Y+CGEBQWRkIHNvbWUgZXh0cmEgYW1vdW50IHRoYXQgaGF2ZSBhcHBlYXJlZCBpbiB0aGUgc3Rhc2ggYGZyZWVfYmFsYW5jZWAgaW50byB0aGUgYmFsYW5jZSB1cDBmb3Igc3Rha2luZy4YdW5ib25kBBR2YWx1ZUhDb21wYWN0PEJhbGFuY2VPZj4MUQFTY2hlZHVsZSBhIHBvcnRpb24gb2YgdGhlIHN0YXNoIHRvIGJlIHVubG9ja2VkIHJlYWR5IGZvciB0cmFuc2ZlciBvdXQgYWZ0ZXIgdGhlIGJvbmT8cGVyaW9kIGVuZHMuIElmIHRoaXMgbGVhdmVzIGFuIGFtb3VudCBhY3RpdmVseSBib25kZWQgbGVzcyB0aGFuIQFUOjpDdXJyZW5jeTo6bWluaW11bV9iYWxhbmNlKCksIHRoZW4gaXQgaXMgaW5jcmVhc2VkIHRvIHRoZSBmdWxsIGFtb3VudC5Ed2l0aGRyYXdfdW5ib25kZWQESG51bV9zbGFzaGluZ19zcGFucwx1MzIEKQFSZW1vdmUgYW55IHVubG9ja2VkIGNodW5rcyBmcm9tIHRoZSBgdW5sb2NraW5nYCBxdWV1ZSBmcm9tIG91ciBtYW5hZ2VtZW50LiB2YWxpZGF0ZQQUcHJlZnM4VmFsaWRhdG9yUHJlZnME5ERlY2xhcmUgdGhlIGRlc2lyZSB0byB2YWxpZGF0ZSBmb3IgdGhlIG9yaWdpbiBjb250cm9sbGVyLiBub21pbmF0ZQQcdGFyZ2V0c0RWZWM8TG9va3VwU291cmNlPgQNAURlY2xhcmUgdGhlIGRlc2lyZSB0byBub21pbmF0ZSBgdGFyZ2V0c2AgZm9yIHRoZSBvcmlnaW4gY29udHJvbGxlci4UY2hpbGwABMREZWNsYXJlIG5vIGRlc2lyZSB0byBlaXRoZXIgdmFsaWRhdGUgb3Igbm9taW5hdGUuJHNldF9wYXllZQQUcGF5ZWVEUmV3YXJkRGVzdGluYXRpb24EtChSZS0pc2V0IHRoZSBwYXltZW50IHRhcmdldCBmb3IgYSBjb250cm9sbGVyLjhzZXRfY29udHJvbGxlcgQoY29udHJvbGxlcjBMb29rdXBTb3VyY2UEjChSZS0pc2V0IHRoZSBjb250cm9sbGVyIG9mIGEgc3Rhc2guTHNldF92YWxpZGF0b3JfY291bnQEDG5ldzBDb21wYWN0PHUzMj4EkFNldHMgdGhlIGlkZWFsIG51bWJlciBvZiB2YWxpZGF0b3JzLmBpbmNyZWFzZV92YWxpZGF0b3JfY291bnQEKGFkZGl0aW9uYWwwQ29tcGFjdDx1MzI+BKhJbmNyZW1lbnRzIHRoZSBpZGVhbCBudW1iZXIgb2YgdmFsaWRhdG9ycy5Uc2NhbGVfdmFsaWRhdG9yX2NvdW50BBhmYWN0b3IcUGVyY2VudATQU2NhbGUgdXAgdGhlIGlkZWFsIG51bWJlciBvZiB2YWxpZGF0b3JzIGJ5IGEgZmFjdG9yLjRmb3JjZV9ub19lcmFzAASsRm9yY2UgdGhlcmUgdG8gYmUgbm8gbmV3IGVyYXMgaW5kZWZpbml0ZWx5LjRmb3JjZV9uZXdfZXJhAAhJAUZvcmNlIHRoZXJlIHRvIGJlIGEgbmV3IGVyYSBhdCB0aGUgZW5kIG9mIHRoZSBuZXh0IHNlc3Npb24uIEFmdGVyIHRoaXMsIGl0IHdpbGwgYmWccmVzZXQgdG8gbm9ybWFsIChub24tZm9yY2VkKSBiZWhhdmlvdXIuRHNldF9pbnZ1bG5lcmFibGVzBDRpbnZ1bG5lcmFibGVzOFZlYzxBY2NvdW50SWQ+BMhTZXQgdGhlIHZhbGlkYXRvcnMgd2hvIGNhbm5vdCBiZSBzbGFzaGVkIChpZiBhbnkpLjRmb3JjZV91bnN0YWtlCBRzdGFzaCRBY2NvdW50SWRIbnVtX3NsYXNoaW5nX3NwYW5zDHUzMgQJAUZvcmNlIGEgY3VycmVudCBzdGFrZXIgdG8gYmVjb21lIGNvbXBsZXRlbHkgdW5zdGFrZWQsIGltbWVkaWF0ZWx5LlBmb3JjZV9uZXdfZXJhX2Fsd2F5cwAEAQFGb3JjZSB0aGVyZSB0byBiZSBhIG5ldyBlcmEgYXQgdGhlIGVuZCBvZiBzZXNzaW9ucyBpbmRlZmluaXRlbHkuVGNhbmNlbF9kZWZlcnJlZF9zbGFzaAgMZXJhIEVyYUluZGV4NHNsYXNoX2luZGljZXMgVmVjPHUzMj4ElENhbmNlbCBlbmFjdG1lbnQgb2YgYSBkZWZlcnJlZCBzbGFzaC44cGF5b3V0X3N0YWtlcnMIPHZhbGlkYXRvcl9zdGFzaCRBY2NvdW50SWQMZXJhIEVyYUluZGV4BA0BUGF5IG91dCBhbGwgdGhlIHN0YWtlcnMgYmVoaW5kIGEgc2luZ2xlIHZhbGlkYXRvciBmb3IgYSBzaW5nbGUgZXJhLhhyZWJvbmQEFHZhbHVlSENvbXBhY3Q8QmFsYW5jZU9mPgTcUmVib25kIGEgcG9ydGlvbiBvZiB0aGUgc3Rhc2ggc2NoZWR1bGVkIHRvIGJlIHVubG9ja2VkLkRzZXRfaGlzdG9yeV9kZXB0aAhEbmV3X2hpc3RvcnlfZGVwdGhEQ29tcGFjdDxFcmFJbmRleD5IX2VyYV9pdGVtc19kZWxldGVkMENvbXBhY3Q8dTMyPggtAVNldCBgSGlzdG9yeURlcHRoYCB2YWx1ZS4gVGhpcyBmdW5jdGlvbiB3aWxsIGRlbGV0ZSBhbnkgaGlzdG9yeSBpbmZvcm1hdGlvbnx3aGVuIGBIaXN0b3J5RGVwdGhgIGlzIHJlZHVjZWQuKHJlYXBfc3Rhc2gIFHN0YXNoJEFjY291bnRJZEhudW1fc2xhc2hpbmdfc3BhbnMMdTMyDDUBUmVtb3ZlIGFsbCBkYXRhIHN0cnVjdHVyZSBjb25jZXJuaW5nIGEgc3Rha2VyL3N0YXNoIG9uY2UgaXRzIGJhbGFuY2UgaXMgemVyby5dAVRoaXMgaXMgZXNzZW50aWFsbHkgZXF1aXZhbGVudCB0byBgd2l0aGRyYXdfdW5ib25kZWRgIGV4Y2VwdCBpdCBjYW4gYmUgY2FsbGVkIGJ5IGFueW9uZbxhbmQgdGhlIHRhcmdldCBgc3Rhc2hgIG11c3QgaGF2ZSBubyBmdW5kcyBsZWZ0LmBzdWJtaXRfZWxlY3Rpb25fc29sdXRpb24UHHdpbm5lcnNMVmVjPFZhbGlkYXRvckluZGV4Phxjb21wYWN0SENvbXBhY3RBc3NpZ25tZW50cxRzY29yZTRFbGVjdGlvblNjb3JlDGVyYSBFcmFJbmRleBBzaXplMEVsZWN0aW9uU2l6ZQTgU3VibWl0IGFuIGVsZWN0aW9uIHJlc3VsdCB0byB0aGUgY2hhaW4uIElmIHRoZSBzb2x1dGlvbjqEc3VibWl0X2VsZWN0aW9uX3NvbHV0aW9uX3Vuc2lnbmVkFBx3aW5uZXJzTFZlYzxWYWxpZGF0b3JJbmRleD4cY29tcGFjdEhDb21wYWN0QXNzaWdubWVudHMUc2NvcmU0RWxlY3Rpb25TY29yZQxlcmEgRXJhSW5kZXgQc2l6ZTBFbGVjdGlvblNpemUEvFVuc2lnbmVkIHZlcnNpb24gb2YgYHN1Ym1pdF9lbGVjdGlvbl9zb2x1dGlvbmAuAAAABiBPZmZlbmNlcwABAAAAAAcoSGlzdG9yaWNhbAAAAAAAGxxTZXNzaW9uAAEIIHNldF9rZXlzCBBrZXlzEEtleXMUcHJvb2YUQnl0ZXMM5FNldHMgdGhlIHNlc3Npb24ga2V5KHMpIG9mIHRoZSBmdW5jdGlvbiBjYWxsZXIgdG8gYGtleXNgLh0BQWxsb3dzIGFuIGFjY291bnQgdG8gc2V0IGl0cyBzZXNzaW9uIGtleSBwcmlvciB0byBiZWNvbWluZyBhIHZhbGlkYXRvci7AVGhpcyBkb2Vzbid0IHRha2UgZWZmZWN0IHVudGlsIHRoZSBuZXh0IHNlc3Npb24uKHB1cmdlX2tleXMACMhSZW1vdmVzIGFueSBzZXNzaW9uIGtleShzKSBvZiB0aGUgZnVuY3Rpb24gY2FsbGVyLsBUaGlzIGRvZXNuJ3QgdGFrZSBlZmZlY3QgdW50aWwgdGhlIG5leHQgc2Vzc2lvbi4AAAAIPEZpbmFsaXR5VHJhY2tlcgABBChmaW5hbF9oaW50BBBoaW50UENvbXBhY3Q8QmxvY2tOdW1iZXI+CPBIaW50IHRoYXQgdGhlIGF1dGhvciBvZiB0aGlzIGJsb2NrIHRoaW5rcyB0aGUgYmVzdCBmaW5hbGl6ZWRoYmxvY2sgaXMgdGhlIGdpdmVuIG51bWJlci4AAAAJHEdyYW5kcGEAAQxMcmVwb3J0X2VxdWl2b2NhdGlvbghIZXF1aXZvY2F0aW9uX3Byb29mYEdyYW5kcGFFcXVpdm9jYXRpb25Qcm9vZjxrZXlfb3duZXJfcHJvb2Y0S2V5T3duZXJQcm9vZhAJAVJlcG9ydCB2b3RlciBlcXVpdm9jYXRpb24vbWlzYmVoYXZpb3IuIFRoaXMgbWV0aG9kIHdpbGwgdmVyaWZ5IHRoZfRlcXVpdm9jYXRpb24gcHJvb2YgYW5kIHZhbGlkYXRlIHRoZSBnaXZlbiBrZXkgb3duZXJzaGlwIHByb29m+GFnYWluc3QgdGhlIGV4dHJhY3RlZCBvZmZlbmRlci4gSWYgYm90aCBhcmUgdmFsaWQsIHRoZSBvZmZlbmNlRHdpbGwgYmUgcmVwb3J0ZWQucHJlcG9ydF9lcXVpdm9jYXRpb25fdW5zaWduZWQISGVxdWl2b2NhdGlvbl9wcm9vZmBHcmFuZHBhRXF1aXZvY2F0aW9uUHJvb2Y8a2V5X293bmVyX3Byb29mNEtleU93bmVyUHJvb2YQCQFSZXBvcnQgdm90ZXIgZXF1aXZvY2F0aW9uL21pc2JlaGF2aW9yLiBUaGlzIG1ldGhvZCB3aWxsIHZlcmlmeSB0aGX0ZXF1aXZvY2F0aW9uIHByb29mIGFuZCB2YWxpZGF0ZSB0aGUgZ2l2ZW4ga2V5IG93bmVyc2hpcCBwcm9vZvhhZ2FpbnN0IHRoZSBleHRyYWN0ZWQgb2ZmZW5kZXIuIElmIGJvdGggYXJlIHZhbGlkLCB0aGUgb2ZmZW5jZUR3aWxsIGJlIHJlcG9ydGVkLjBub3RlX3N0YWxsZWQIFGRlbGF5LEJsb2NrTnVtYmVybGJlc3RfZmluYWxpemVkX2Jsb2NrX251bWJlcixCbG9ja051bWJlchwZAU5vdGUgdGhhdCB0aGUgY3VycmVudCBhdXRob3JpdHkgc2V0IG9mIHRoZSBHUkFORFBBIGZpbmFsaXR5IGdhZGdldCBoYXMlAXN0YWxsZWQuIFRoaXMgd2lsbCB0cmlnZ2VyIGEgZm9yY2VkIGF1dGhvcml0eSBzZXQgY2hhbmdlIGF0IHRoZSBiZWdpbm5pbmcdAW9mIHRoZSBuZXh0IHNlc3Npb24sIHRvIGJlIGVuYWN0ZWQgYGRlbGF5YCBibG9ja3MgYWZ0ZXIgdGhhdC4gVGhlIGRlbGF5EQFzaG91bGQgYmUgaGlnaCBlbm91Z2ggdG8gc2FmZWx5IGFzc3VtZSB0aGF0IHRoZSBibG9jayBzaWduYWxsaW5nIHRoZSUBZm9yY2VkIGNoYW5nZSB3aWxsIG5vdCBiZSByZS1vcmdlZCAoZS5nLiAxMDAwIGJsb2NrcykuIFRoZSBHUkFORFBBIHZvdGVycyUBd2lsbCBzdGFydCB0aGUgbmV3IGF1dGhvcml0eSBzZXQgdXNpbmcgdGhlIGdpdmVuIGZpbmFsaXplZCBibG9jayBhcyBiYXNlLlhPbmx5IGNhbGxhYmxlIGJ5IHJvb3QuAAAACiBJbU9ubGluZQABBCRoZWFydGJlYXQIJGhlYXJ0YmVhdCRIZWFydGJlYXQoX3NpZ25hdHVyZSRTaWduYXR1cmUkKCMgPHdlaWdodD49AS0gQ29tcGxleGl0eTogYE8oSyArIEUpYCB3aGVyZSBLIGlzIGxlbmd0aCBvZiBgS2V5c2AgKGhlYXJ0YmVhdC52YWxpZGF0b3JzX2xlbin0YW5kIEUgaXMgbGVuZ3RoIG9mIGBoZWFydGJlYXQubmV0d29ya19zdGF0ZS5leHRlcm5hbF9hZGRyZXNzYIAtIGBPKEspYDogZGVjb2Rpbmcgb2YgbGVuZ3RoIGBLYKQtIGBPKEUpYDogZGVjb2RpbmcvZW5jb2Rpbmcgb2YgbGVuZ3RoIGBFYDkBLSBEYlJlYWRzOiBwYWxsZXRfc2Vzc2lvbiBgVmFsaWRhdG9yc2AsIHBhbGxldF9zZXNzaW9uIGBDdXJyZW50SW5kZXhgLCBgS2V5c2AsUGBSZWNlaXZlZEhlYXJ0YmVhdHNggC0gRGJXcml0ZXM6IGBSZWNlaXZlZEhlYXJ0YmVhdHNgLCMgPC93ZWlnaHQ+AAAAC0hBdXRob3JpdHlEaXNjb3ZlcnkAAQAAAAAMHFV0aWxpdHkAAQgUYmF0Y2gEFGNhbGxzJFZlYzxDYWxsPgR8U2VuZCBhIGJhdGNoIG9mIGRpc3BhdGNoIGNhbGxzLjRhc19kZXJpdmF0aXZlCBRpbmRleAx1MTYQY2FsbBBDYWxsBNxTZW5kIGEgY2FsbCB0aHJvdWdoIGFuIGluZGV4ZWQgcHNldWRvbnltIG9mIHRoZSBzZW5kZXIuAAAAECBJZGVudGl0eQABPDRhZGRfcmVnaXN0cmFyBBxhY2NvdW50JEFjY291bnRJZAR4QWRkIGEgcmVnaXN0cmFyIHRvIHRoZSBzeXN0ZW0uMHNldF9pZGVudGl0eQQQaW5mbzBJZGVudGl0eUluZm8EKQFTZXQgYW4gYWNjb3VudCdzIGlkZW50aXR5IGluZm9ybWF0aW9uIGFuZCByZXNlcnZlIHRoZSBhcHByb3ByaWF0ZSBkZXBvc2l0LiBzZXRfc3VicwQQc3Vic1RWZWM8KEFjY291bnRJZCxEYXRhKT4EjFNldCB0aGUgc3ViLWFjY291bnRzIG9mIHRoZSBzZW5kZXIuOGNsZWFyX2lkZW50aXR5AAQ5AUNsZWFyIGFuIGFjY291bnQncyBpZGVudGl0eSBpbmZvIGFuZCBhbGwgc3ViLWFjY291bnRzIGFuZCByZXR1cm4gYWxsIGRlcG9zaXRzLkRyZXF1ZXN0X2p1ZGdlbWVudAgkcmVnX2luZGV4XENvbXBhY3Q8UmVnaXN0cmFySW5kZXg+HG1heF9mZWVIQ29tcGFjdDxCYWxhbmNlT2Y+BJRSZXF1ZXN0IGEganVkZ2VtZW50IGZyb20gYSByZWdpc3RyYXIuOGNhbmNlbF9yZXF1ZXN0BCRyZWdfaW5kZXg4UmVnaXN0cmFySW5kZXgEaENhbmNlbCBhIHByZXZpb3VzIHJlcXVlc3QuHHNldF9mZWUIFGluZGV4XENvbXBhY3Q8UmVnaXN0cmFySW5kZXg+DGZlZUhDb21wYWN0PEJhbGFuY2VPZj4EGQFTZXQgdGhlIGZlZSByZXF1aXJlZCBmb3IgYSBqdWRnZW1lbnQgdG8gYmUgcmVxdWVzdGVkIGZyb20gYSByZWdpc3RyYXIuOHNldF9hY2NvdW50X2lkCBRpbmRleFxDb21wYWN0PFJlZ2lzdHJhckluZGV4PgxuZXckQWNjb3VudElkBLxDaGFuZ2UgdGhlIGFjY291bnQgYXNzb2NpYXRlZCB3aXRoIGEgcmVnaXN0cmFyLihzZXRfZmllbGRzCBRpbmRleFxDb21wYWN0PFJlZ2lzdHJhckluZGV4PhhmaWVsZHM4SWRlbnRpdHlGaWVsZHMEqFNldCB0aGUgZmllbGQgaW5mb3JtYXRpb24gZm9yIGEgcmVnaXN0cmFyLkRwcm92aWRlX2p1ZGdlbWVudAwkcmVnX2luZGV4XENvbXBhY3Q8UmVnaXN0cmFySW5kZXg+GHRhcmdldDBMb29rdXBTb3VyY2UkanVkZ2VtZW50RElkZW50aXR5SnVkZ2VtZW50BLhQcm92aWRlIGEganVkZ2VtZW50IGZvciBhbiBhY2NvdW50J3MgaWRlbnRpdHkuNGtpbGxfaWRlbnRpdHkEGHRhcmdldDBMb29rdXBTb3VyY2UEQQFSZW1vdmUgYW4gYWNjb3VudCdzIGlkZW50aXR5IGFuZCBzdWItYWNjb3VudCBpbmZvcm1hdGlvbiBhbmQgc2xhc2ggdGhlIGRlcG9zaXRzLhxhZGRfc3ViCAxzdWIwTG9va3VwU291cmNlEGRhdGEQRGF0YQSsQWRkIHRoZSBnaXZlbiBhY2NvdW50IHRvIHRoZSBzZW5kZXIncyBzdWJzLihyZW5hbWVfc3ViCAxzdWIwTG9va3VwU291cmNlEGRhdGEQRGF0YQTMQWx0ZXIgdGhlIGFzc29jaWF0ZWQgbmFtZSBvZiB0aGUgZ2l2ZW4gc3ViLWFjY291bnQuKHJlbW92ZV9zdWIEDHN1YjBMb29rdXBTb3VyY2UEwFJlbW92ZSB0aGUgZ2l2ZW4gYWNjb3VudCBmcm9tIHRoZSBzZW5kZXIncyBzdWJzLiBxdWl0X3N1YgAEjFJlbW92ZSB0aGUgc2VuZGVyIGFzIGEgc3ViLWFjY291bnQuAAAAESBSZWNvdmVyeQABJDBhc19yZWNvdmVyZWQIHGFjY291bnQkQWNjb3VudElkEGNhbGwQQ2FsbASgU2VuZCBhIGNhbGwgdGhyb3VnaCBhIHJlY292ZXJlZCBhY2NvdW50LjRzZXRfcmVjb3ZlcmVkCBBsb3N0JEFjY291bnRJZBxyZXNjdWVyJEFjY291bnRJZAgZAUFsbG93IFJPT1QgdG8gYnlwYXNzIHRoZSByZWNvdmVyeSBwcm9jZXNzIGFuZCBzZXQgYW4gYSByZXNjdWVyIGFjY291bnRwZm9yIGEgbG9zdCBhY2NvdW50IGRpcmVjdGx5LjxjcmVhdGVfcmVjb3ZlcnkMHGZyaWVuZHM4VmVjPEFjY291bnRJZD4kdGhyZXNob2xkDHUxNjBkZWxheV9wZXJpb2QsQmxvY2tOdW1iZXIEWQFDcmVhdGUgYSByZWNvdmVyeSBjb25maWd1cmF0aW9uIGZvciB5b3VyIGFjY291bnQuIFRoaXMgbWFrZXMgeW91ciBhY2NvdW50IHJlY292ZXJhYmxlLkRpbml0aWF0ZV9yZWNvdmVyeQQcYWNjb3VudCRBY2NvdW50SWQE6EluaXRpYXRlIHRoZSBwcm9jZXNzIGZvciByZWNvdmVyaW5nIGEgcmVjb3ZlcmFibGUgYWNjb3VudC44dm91Y2hfcmVjb3ZlcnkIEGxvc3QkQWNjb3VudElkHHJlc2N1ZXIkQWNjb3VudElkCCUBQWxsb3cgYSAiZnJpZW5kIiBvZiBhIHJlY292ZXJhYmxlIGFjY291bnQgdG8gdm91Y2ggZm9yIGFuIGFjdGl2ZSByZWNvdmVyeWRwcm9jZXNzIGZvciB0aGF0IGFjY291bnQuOGNsYWltX3JlY292ZXJ5BBxhY2NvdW50JEFjY291bnRJZATwQWxsb3cgYSBzdWNjZXNzZnVsIHJlc2N1ZXIgdG8gY2xhaW0gdGhlaXIgcmVjb3ZlcmVkIGFjY291bnQuOGNsb3NlX3JlY292ZXJ5BBxyZXNjdWVyJEFjY291bnRJZAgRAUFzIHRoZSBjb250cm9sbGVyIG9mIGEgcmVjb3ZlcmFibGUgYWNjb3VudCwgY2xvc2UgYW4gYWN0aXZlIHJlY292ZXJ5ZHByb2Nlc3MgZm9yIHlvdXIgYWNjb3VudC48cmVtb3ZlX3JlY292ZXJ5AARZAVJlbW92ZSB0aGUgcmVjb3ZlcnkgcHJvY2VzcyBmb3IgeW91ciBhY2NvdW50LiBSZWNvdmVyZWQgYWNjb3VudHMgYXJlIHN0aWxsIGFjY2Vzc2libGUuQGNhbmNlbF9yZWNvdmVyZWQEHGFjY291bnQkQWNjb3VudElkBNxDYW5jZWwgdGhlIGFiaWxpdHkgdG8gdXNlIGBhc19yZWNvdmVyZWRgIGZvciBgYWNjb3VudGAuAAAAEhxWZXN0aW5nAAEQEHZlc3QABLhVbmxvY2sgYW55IHZlc3RlZCBmdW5kcyBvZiB0aGUgc2VuZGVyIGFjY291bnQuKHZlc3Rfb3RoZXIEGHRhcmdldDBMb29rdXBTb3VyY2UEuFVubG9jayBhbnkgdmVzdGVkIGZ1bmRzIG9mIGEgYHRhcmdldGAgYWNjb3VudC48dmVzdGVkX3RyYW5zZmVyCBh0YXJnZXQwTG9va3VwU291cmNlIHNjaGVkdWxlLFZlc3RpbmdJbmZvBGRDcmVhdGUgYSB2ZXN0ZWQgdHJhbnNmZXIuVGZvcmNlX3Zlc3RlZF90cmFuc2ZlcgwYc291cmNlMExvb2t1cFNvdXJjZRh0YXJnZXQwTG9va3VwU291cmNlIHNjaGVkdWxlLFZlc3RpbmdJbmZvBGBGb3JjZSBhIHZlc3RlZCB0cmFuc2Zlci4AAAATJFNjaGVkdWxlcgABGCBzY2hlZHVsZRAQd2hlbixCbG9ja051bWJlcjhtYXliZV9wZXJpb2RpYzhPcHRpb248UGVyaW9kPiBwcmlvcml0eSBQcmlvcml0eRBjYWxsEENhbGwEcEFub255bW91c2x5IHNjaGVkdWxlIGEgdGFzay4YY2FuY2VsCBB3aGVuLEJsb2NrTnVtYmVyFGluZGV4DHUzMgSUQ2FuY2VsIGFuIGFub255bW91c2x5IHNjaGVkdWxlZCB0YXNrLjhzY2hlZHVsZV9uYW1lZBQIaWQUQnl0ZXMQd2hlbixCbG9ja051bWJlcjhtYXliZV9wZXJpb2RpYzhPcHRpb248UGVyaW9kPiBwcmlvcml0eSBQcmlvcml0eRBjYWxsEENhbGwEWFNjaGVkdWxlIGEgbmFtZWQgdGFzay4wY2FuY2VsX25hbWVkBAhpZBRCeXRlcwR4Q2FuY2VsIGEgbmFtZWQgc2NoZWR1bGVkIHRhc2suOHNjaGVkdWxlX2FmdGVyEBRhZnRlcixCbG9ja051bWJlcjhtYXliZV9wZXJpb2RpYzhPcHRpb248UGVyaW9kPiBwcmlvcml0eSBQcmlvcml0eRBjYWxsEENhbGwEqEFub255bW91c2x5IHNjaGVkdWxlIGEgdGFzayBhZnRlciBhIGRlbGF5LlBzY2hlZHVsZV9uYW1lZF9hZnRlchQIaWQUQnl0ZXMUYWZ0ZXIsQmxvY2tOdW1iZXI4bWF5YmVfcGVyaW9kaWM4T3B0aW9uPFBlcmlvZD4gcHJpb3JpdHkgUHJpb3JpdHkQY2FsbBBDYWxsBJBTY2hlZHVsZSBhIG5hbWVkIHRhc2sgYWZ0ZXIgYSBkZWxheS4AAAAUEFN1ZG8AARAQc3VkbwQQY2FsbBBDYWxsBDUBQXV0aGVudGljYXRlcyB0aGUgc3VkbyBrZXkgYW5kIGRpc3BhdGNoZXMgYSBmdW5jdGlvbiBjYWxsIHdpdGggYFJvb3RgIG9yaWdpbi5Uc3Vkb191bmNoZWNrZWRfd2VpZ2h0CBBjYWxsEENhbGwcX3dlaWdodBhXZWlnaHQMNQFBdXRoZW50aWNhdGVzIHRoZSBzdWRvIGtleSBhbmQgZGlzcGF0Y2hlcyBhIGZ1bmN0aW9uIGNhbGwgd2l0aCBgUm9vdGAgb3JpZ2luLi0BVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBjaGVjayB0aGUgd2VpZ2h0IG9mIHRoZSBjYWxsLCBhbmQgaW5zdGVhZCBhbGxvd3MgdGhlsFN1ZG8gdXNlciB0byBzcGVjaWZ5IHRoZSB3ZWlnaHQgb2YgdGhlIGNhbGwuHHNldF9rZXkEDG5ldzBMb29rdXBTb3VyY2UEcQFBdXRoZW50aWNhdGVzIHRoZSBjdXJyZW50IHN1ZG8ga2V5IGFuZCBzZXRzIHRoZSBnaXZlbiBBY2NvdW50SWQgKGBuZXdgKSBhcyB0aGUgbmV3IHN1ZG8ga2V5LhxzdWRvX2FzCAx3aG8wTG9va3VwU291cmNlEGNhbGwQQ2FsbAhNAUF1dGhlbnRpY2F0ZXMgdGhlIHN1ZG8ga2V5IGFuZCBkaXNwYXRjaGVzIGEgZnVuY3Rpb24gY2FsbCB3aXRoIGBTaWduZWRgIG9yaWdpbiBmcm9tQGEgZ2l2ZW4gYWNjb3VudC4AAAAVFFByb3h5AAEoFHByb3h5DBByZWFsJEFjY291bnRJZEBmb3JjZV9wcm94eV90eXBlRE9wdGlvbjxQcm94eVR5cGU+EGNhbGwQQ2FsbAhNAURpc3BhdGNoIHRoZSBnaXZlbiBgY2FsbGAgZnJvbSBhbiBhY2NvdW50IHRoYXQgdGhlIHNlbmRlciBpcyBhdXRob3Jpc2VkIGZvciB0aHJvdWdoMGBhZGRfcHJveHlgLiRhZGRfcHJveHkMIGRlbGVnYXRlJEFjY291bnRJZChwcm94eV90eXBlJFByb3h5VHlwZRRkZWxheSxCbG9ja051bWJlcgRFAVJlZ2lzdGVyIGEgcHJveHkgYWNjb3VudCBmb3IgdGhlIHNlbmRlciB0aGF0IGlzIGFibGUgdG8gbWFrZSBjYWxscyBvbiBpdHMgYmVoYWxmLjByZW1vdmVfcHJveHkMIGRlbGVnYXRlJEFjY291bnRJZChwcm94eV90eXBlJFByb3h5VHlwZRRkZWxheSxCbG9ja051bWJlcgSoVW5yZWdpc3RlciBhIHByb3h5IGFjY291bnQgZm9yIHRoZSBzZW5kZXIuOHJlbW92ZV9wcm94aWVzAAS0VW5yZWdpc3RlciBhbGwgcHJveHkgYWNjb3VudHMgZm9yIHRoZSBzZW5kZXIuJGFub255bW91cwwocHJveHlfdHlwZSRQcm94eVR5cGUUZGVsYXksQmxvY2tOdW1iZXIUaW5kZXgMdTE2CDkBU3Bhd24gYSBmcmVzaCBuZXcgYWNjb3VudCB0aGF0IGlzIGd1YXJhbnRlZWQgdG8gYmUgb3RoZXJ3aXNlIGluYWNjZXNzaWJsZSwgYW5k/GluaXRpYWxpemUgaXQgd2l0aCBhIHByb3h5IG9mIGBwcm94eV90eXBlYCBmb3IgYG9yaWdpbmAgc2VuZGVyLjhraWxsX2Fub255bW91cxQcc3Bhd25lciRBY2NvdW50SWQocHJveHlfdHlwZSRQcm94eVR5cGUUaW5kZXgMdTE2GGhlaWdodFBDb21wYWN0PEJsb2NrTnVtYmVyPiRleHRfaW5kZXgwQ29tcGFjdDx1MzI+BLRSZW1vdmVzIGEgcHJldmlvdXNseSBzcGF3bmVkIGFub255bW91cyBwcm94eS4gYW5ub3VuY2UIEHJlYWwkQWNjb3VudElkJGNhbGxfaGFzaChDYWxsSGFzaE9mBAUBUHVibGlzaCB0aGUgaGFzaCBvZiBhIHByb3h5LWNhbGwgdGhhdCB3aWxsIGJlIG1hZGUgaW4gdGhlIGZ1dHVyZS5McmVtb3ZlX2Fubm91bmNlbWVudAgQcmVhbCRBY2NvdW50SWQkY2FsbF9oYXNoKENhbGxIYXNoT2YEcFJlbW92ZSBhIGdpdmVuIGFubm91bmNlbWVudC5McmVqZWN0X2Fubm91bmNlbWVudAggZGVsZWdhdGUkQWNjb3VudElkJGNhbGxfaGFzaChDYWxsSGFzaE9mBLBSZW1vdmUgdGhlIGdpdmVuIGFubm91bmNlbWVudCBvZiBhIGRlbGVnYXRlLjxwcm94eV9hbm5vdW5jZWQQIGRlbGVnYXRlJEFjY291bnRJZBByZWFsJEFjY291bnRJZEBmb3JjZV9wcm94eV90eXBlRE9wdGlvbjxQcm94eVR5cGU+EGNhbGwQQ2FsbAhNAURpc3BhdGNoIHRoZSBnaXZlbiBgY2FsbGAgZnJvbSBhbiBhY2NvdW50IHRoYXQgdGhlIHNlbmRlciBpcyBhdXRob3Jpc2VkIGZvciB0aHJvdWdoMGBhZGRfcHJveHlgLgAAABYgTXVsdGlzaWcAARBQYXNfbXVsdGlfdGhyZXNob2xkXzEIRG90aGVyX3NpZ25hdG9yaWVzOFZlYzxBY2NvdW50SWQ+EGNhbGwQQ2FsbARRAUltbWVkaWF0ZWx5IGRpc3BhdGNoIGEgbXVsdGktc2lnbmF0dXJlIGNhbGwgdXNpbmcgYSBzaW5nbGUgYXBwcm92YWwgZnJvbSB0aGUgY2FsbGVyLiBhc19tdWx0aRgkdGhyZXNob2xkDHUxNkRvdGhlcl9zaWduYXRvcmllczhWZWM8QWNjb3VudElkPjxtYXliZV90aW1lcG9pbnRET3B0aW9uPFRpbWVwb2ludD4QY2FsbChPcGFxdWVDYWxsKHN0b3JlX2NhbGwQYm9vbChtYXhfd2VpZ2h0GFdlaWdodAhVAVJlZ2lzdGVyIGFwcHJvdmFsIGZvciBhIGRpc3BhdGNoIHRvIGJlIG1hZGUgZnJvbSBhIGRldGVybWluaXN0aWMgY29tcG9zaXRlIGFjY291bnQgaWb4YXBwcm92ZWQgYnkgYSB0b3RhbCBvZiBgdGhyZXNob2xkIC0gMWAgb2YgYG90aGVyX3NpZ25hdG9yaWVzYC5AYXBwcm92ZV9hc19tdWx0aRQkdGhyZXNob2xkDHUxNkRvdGhlcl9zaWduYXRvcmllczhWZWM8QWNjb3VudElkPjxtYXliZV90aW1lcG9pbnRET3B0aW9uPFRpbWVwb2ludD4kY2FsbF9oYXNoHFt1ODszMl0obWF4X3dlaWdodBhXZWlnaHQIVQFSZWdpc3RlciBhcHByb3ZhbCBmb3IgYSBkaXNwYXRjaCB0byBiZSBtYWRlIGZyb20gYSBkZXRlcm1pbmlzdGljIGNvbXBvc2l0ZSBhY2NvdW50IGlm+GFwcHJvdmVkIGJ5IGEgdG90YWwgb2YgYHRocmVzaG9sZCAtIDFgIG9mIGBvdGhlcl9zaWduYXRvcmllc2AuPGNhbmNlbF9hc19tdWx0aRAkdGhyZXNob2xkDHUxNkRvdGhlcl9zaWduYXRvcmllczhWZWM8QWNjb3VudElkPiR0aW1lcG9pbnQkVGltZXBvaW50JGNhbGxfaGFzaBxbdTg7MzJdCFUBQ2FuY2VsIGEgcHJlLWV4aXN0aW5nLCBvbi1nb2luZyBtdWx0aXNpZyB0cmFuc2FjdGlvbi4gQW55IGRlcG9zaXQgcmVzZXJ2ZWQgcHJldmlvdXNsecRmb3IgdGhpcyBvcGVyYXRpb24gd2lsbCBiZSB1bnJlc2VydmVkIG9uIHN1Y2Nlc3MuAAAAFwQcQENoZWNrU3BlY1ZlcnNpb244Q2hlY2tUeFZlcnNpb24wQ2hlY2tHZW5lc2lzOENoZWNrTW9ydGFsaXR5KENoZWNrTm9uY2UsQ2hlY2tXZWlnaHRgQ2hhcmdlVHJhbnNhY3Rpb25QYXltZW50',
  specVersion: 45,
  ss58Format: 42,
  tokenDecimals: 12,
  tokenSymbol: 'WND',
  types: {
    Address: 'AccountId',
    Keys: 'SessionKeys5',
    LookupSource: 'AccountId',
    ProxyType: {
      _enum: [
        'Any',
        'NonTransfer',
        'Staking',
        'Unused',
        'IdentityJudgement'
      ] as unknown
    }
  }
} as MetadataDef;
